import express from "express";
import conetcaNaDataBase from "./config/dbConect.js";
import routes from "./routes/index.js";

const conexao = await conetcaNaDataBase();

conexao.on("error", (error) => {
  console.error("erro de conexão:", error);
});

conexao.once("open", () => {
  console.log("conectado com sucesso");
});

const app = express();
routes(app);

export default app;
