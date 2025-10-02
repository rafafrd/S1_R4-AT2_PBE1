const express = require("express");
const app = express();
const PORT = 8081;

// Criar um projeto com uma rota POST /login que receba um usuário e senha no body e verifique:
// O usuário e senha infomados estão corretos.
// Se os valores forem diferentes do esperado, retorne um erro no formato json informado o usuário.
// Para o teste utilize os valores, usuario: admin e senha:1234


// middleware para utilização de JSON
app.use(express.json());
// ==============================

app.post("/login", (req, res) => {
  try {
    const { usuario, senha } = req.body;
    if (usuario === "admin" && senha === "1234") {
      console.log(`Login bem sucedido`)
      res.status(200).json({ message: "Login bem sucedido" });
    } else {
      console.log(`Usuário ou senha incorretos   usuario: ${usuario}`)
      res.status(401).json({ message: "Usuário ou senha incorretos", usuario: usuario });
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