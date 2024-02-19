import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get('/livros',LivroController.listarLivros)
routes.get('/livros/busca',LivroController.listarLivrosPorEditora)
routes.get('/livros/:id',LivroController.listarLivroPorId)
routes.post('/livros/cadastrar',LivroController.cadastrarLivro)
routes.put('/livros/alterar/:id',LivroController.atualizarLivroPorId)
routes.delete('/livros/excluir/:id',LivroController.excluirLivroPorId)

export default routes