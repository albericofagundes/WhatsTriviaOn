import venom from "venom-bot";
import pkg from "pg";
import express from "express";
import cors from "cors";

const { create } = venom;
const { Pool } = pkg;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dbConfig = {
  user: "postgres",
  password: "99411520",
  host: "postgres_whats-trivia-old2",
  port: 5432,
  database: "whatspdf",
};

const pool = new Pool(dbConfig);

// Função para verificar a conexão com o banco de dados
async function checkDatabaseConnection() {
  const client = await pool.connect();
  try {
    console.log("Conexão bem-sucedida ao banco de dados");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    throw error;
  } finally {
    client.release();
  }
}

// Chamada da função para verificar a conexão
checkDatabaseConnection()
  .then(() => {
    console.log("Conexão bem-sucedida. Pronto para realizar consultas.");
  })
  .catch((error) => {
    console.error("Erro ao verificar a conexão com o banco de dados:", error);
  });
