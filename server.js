const express = require("express");
const app = express();
const PORT = 8081;

// Criar um projeto com uma rota POST /soma que receba 3 números no body e retorne o resultado da 
// soma dos números recebidos. Verifique antes da soma se os os campos recebidos possuem valores numéricos;
// Se necessário, informe ao cliente os problemas encontrados;


// middleware para utilização de JSON
app.use(express.json());
// ==============================

app.post("/soma", (req, res) => {
  try {
    const { num1, num2, num3 } = req.body;
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      res.status(400).json({ message: "Por favor, envie apenas valores numéricos." });
    }
    else {
      const soma = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);
      console.log(`A soma dos números é ${soma}`)
      res.status(201).json({ message: `A soma dos números é ${soma}` });
    }
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