### Resultados Esperados:
Criar e executar um servidor básico utilizando o framework Express.js.
Criar e testar rotas tipo POST.
Realizar leitura do corpo da requisição.
Utilizar leitura de arquivos JSON.
Utilizar respostas com status HTTP.

---

### Tarefas:
Crie os seguintes projetos separadamente e faça o versinamento em um único repositório no GitHub:
Para todos os exercícios, trate possíveis erros na execução da codificação bem como a validação dos dados recebidos;

###### 1. Crie uma projeto com que tenha uma rota POST /mensagem que atenda as seguintes necessidades:
Receba através do corpo da requisição (body) 3 dados: nome, idade e time favorito;
Retorne uma frase formada com os 3 dados recebidos: "Olá, Carlos! Você tem 18 anos e torce para o Real Madrid!";

---

###### 2. Criar um projeto com uma rota POST /soma que receba 3 números no body e retorne o resultado da soma dos números recebidos.
Verifique antes da soma se os os campos recebidos possuem valores numéricos;
Se necessário, informe ao cliente os problemas encontrados;

---

###### 3. Criar um projeto com uma rota POST /login que receba um usuário e senha no body e verifique:
O usuário e senha infomados estão corretos.
Se os valores forem diferentes do esperado, retorne um erro no formato json informado o usuário.
Para o teste utilize os valores, usuario: admin e senha:1234
