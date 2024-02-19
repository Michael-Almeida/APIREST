import {autor} from "../models/Autor.js";

class AutorController {
  static async listarAutor(req, res) {
    try {
      const listarAutor = await autor.find({});
      res.status(200).json(listarAutor);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao listar autor ` });
    }
  }
  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do autor  ` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar autor ` });
    }
  }

  static async atualizarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorAtualizado = await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado", autorAtualizado });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na atualização do autor  `,
      });
    }
  }
  static async excluirAutorPorId(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).send("Autor excluído com sucesso");
    } catch (error) {
      {
        return res
          .status(500)
          .json({ message: `${error.message} - falha na exclusão ` });
      }
    }
  }
}
export default AutorController;
