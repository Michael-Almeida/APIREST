import mongoose from "mongoose";

async function conetcaNaDataBase() {
  mongoose.connect(process.env.DB_CONECTION_STRING);

  return mongoose.connection;
}

export default conetcaNaDataBase;
