const express = require("express");
const app = express();
const PORT = 8081;

// Crie uma projeto com que tenha uma rota POST /mensagem que atenda as seguintes necessidades:
// Receba através do corpo da requisição (body) 3 dados: nome, idade e time favorito;
// Retorne uma frase formada com os 3 dados recebidos: "Olá, Carlos! Você tem 18 anos e torce para o Real Madrid!";


// middleware para utilização de JSON
app.use(express.json());
// ==============================

app.post("/mensagem", (req, res) => {
  try {
    
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ message: "erro", errorMessage: error.message });
  }
});

// ============================
// config padrão
app.use((req, res) => {
  res.status(404).send(`Página não encontrada`);
});

app.listen(PORT, () => {
  console.log(`Servidor respondendo em: http://localhost:${PORT}`);
});