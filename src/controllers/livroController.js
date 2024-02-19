import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao listar livro ` });
    }
  }
  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do livro  ` });
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await livro.create(livroCompleto);
      res
        .status(201)
        .json({ message: "criado com sucesso", livro: livroCriado });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro ` });
    }
  }

  static async atualizarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroAtualizado = await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado", livroAtualizado });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na atualização do livro  `,
      });
    }
  }
  static async excluirLivroPorId(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).send("Livro excluído com sucesso");
    } catch (error) {
      {
        return res
          .status(500)
          .json({ message: `${error.message} - falha na exclusão ` });
      }
    }
  }

  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json(livrosPorEditora)
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na busca` });
    }
  }
}
export default LivroController;
