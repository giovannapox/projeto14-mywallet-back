import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
// import transacoesRouter from "./routes/transacoes.routes.js";
import usuariosRouter from "./routes/usuario.routes.js";

// Criando o servidor
const app = express();

// Configurando o servidor
app.use(express.json());
app.use(cors());
dotenv.config();
//app.use(transacoesRouter);
app.use(usuariosRouter);

// Conectando com Banco de Dados
const mongoClient = new MongoClient(process.env.DATABASE_URL);
try {
    await mongoClient.connect();
    console.log("MongoDB conectado");
} catch (err) {
    console.log(err.message);
}

const db = mongoClient.db("MyWallet");
export default db

// endpoint

app.post("/nova-transacao/:tipo", async (req, res) => {
    try{

    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get("/home", async (req, res) => {
    try{
        
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// App esperando requisições
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));