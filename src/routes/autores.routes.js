import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get('/autor',AutorController.listarAutor)
routes.get('/autor/:id',AutorController.listarAutorPorId)
routes.post('/autor/cadastrar',AutorController.cadastrarAutor)
routes.put('/autor/alterar/:id',AutorController.atualizarAutorPorId)
routes.delete('/autor/excluir/:id',AutorController.excluirAutorPorId)

export default routes