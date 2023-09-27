# Projeto Trybesmith

Esta aplicação foi desenvolvida utilizando TypeScript e Sequelize, garantindo tipagem robusta e uma integração fluida com o banco de dados.

Principais Características:
- Produtos Personalizados: Permita que os clientes encomendem itens, como espadas, especificamente desenhados e forjados para suas preferências individuais.

Arquitetura em Camadas: A aplicação foi projetada com uma separação clara entre lógica de negócios, acesso a dados e interface da API, promovendo uma melhor organização e manutenção do código.

Autenticação com JWT: Algumas rotas são protegidas utilizando JWT (JSON Web Token), assegurando que apenas usuários autenticados e autorizados possam realizar certas operações.

Testes Automatizados: A integridade e funcionalidade dos endpoints foram verificadas através de testes, assegurando que a aplicação responda de maneira confiável às solicitações.

Operações CRUD: A API suporta operações básicas de criação, leitura e atualização, permitindo uma gestão completa dos itens e pedidos da loja.

## Tecnologias, ferramentas e habilidades
- TypeScript
- Docker
- MySQL
- Node.js
- Express
- Sequelize
- JWT
- Arquitetura em camadas
- Mocha, Chai e Sinon (testes)

 ## Como executar o projeto

<br/>

```bash
# Clone ou baixe o repositório
git clone git@github.com:LarissaSimoes/project_trybesmith.git
# Entre no diretório
cd project_trybesmith
# Instale as dependências
npm install
# Inicie o Docker Compose
docker-compose up -d
# Para entrar no bash do container e ativar o servidor, execute os comandos abaixo no terminal em que o container foi ativado
docker exec -it trybesmith_api bash
npm start
# Para iniciar o servidor com live-reload, utilizar o comando abaixo em vez do npm start
npm run dev
# Para executar os testes, utilizar o seguinte comando
npm run test:mocha
```

<br /><hr /><br />

<p align='center'>
  Desenvolvido por <b>Larissa Simões</b>
  <br/><br/>

  <a href="https://www.linkedin.com/in/dev-larissa-carneiro-simoes/">
    <img alt="linkedIn" height="30px" src="https://i.imgur.com/TQRXxhT.png" />
  </a>
  &nbsp;&nbsp;
</p>
