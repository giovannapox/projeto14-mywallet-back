import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

// Criando o servidor
const app = express();

// Configurando o servidor
app.use(express.json());
app.use(cors());
dotenv.config();

// Conectando com Banco de Dados
const mongoClient = new MongoClient(process.env.DATABASE_URL);
try {
    await mongoClient.connect();
    console.log("MongoDB conectado");
} catch (err) {
    console.log(err.message);
}
const db = mongoClient.db();

// App esperando requisições
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));