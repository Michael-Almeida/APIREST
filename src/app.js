import express from "express";
import conetcaNaDataBase from "./config/dbConect.js";
import livro from "./models/Livro.js";

const conexao = await conetcaNaDataBase();

conexao.on("error", (error) => {
  console.error("erro de conexão:", error);
});

conexao.once("open", () => {
  console.log("conectado com sucesso");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("curso de Node.js");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({})
  res.status(200).json(listaLivros);
});
app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros/cadastrar", (req, res) => {
  livros.push(req.body);
  res.status(201).send("livro cadastrado com sucesso");
});

app.put("/livros/alterar/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});
app.delete("/livros/excluir/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso");
});

export default app;
