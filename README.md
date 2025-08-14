# Livraria API Backend

API para gerenciar livros de uma livraria, permitindo criar, listar, editar e excluir livros no banco de dados usando Node.js, Express e Sequelize.

## Tecnologias

- Node.js
- Express
- Sequelize (ORM para MySQL)
- MySQL
- Javascript

## Estrutura de Pastas

backend/
│
├─ controllers/ # Funções que lidam com as requisições HTTP
├─ database/ # Configuração da conexão com o banco (Sequelize)
├─ model/ # Modelos do Sequelize (ex: Livro)
├─ index.js # Arquivo principal do servidor
├─ package.json # Dependências e scripts do Node


## Instalação

1. Clone o repositório:

git clone <seu-repositorio>
cd backend

2. Instale as dependências:

npm install


3. Configure o banco de dados em database/db.js:

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

## Rodando o servidor

npm run dev
Servidor estará rodando em http://localhost:3000.
 
## Model Livro (Exemplo)

const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Livro = sequelize.define('Livro', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  imagem: {
    type: DataTypes.STRING
  }
});

module.exports = Livro;


## Endpoints

GET /livros

## Listar todos os livros

## Buscar livro por ID

GET /livros/:id

## Criar um livro

## POST /livros

Body: {
  "nome": "Nome do livro",
  "autor": "Autor do livro",
  "preco": 39.90,
  "imagem": "url_da_imagem"
}

## Atualizar um livro

PUT /livros/:id
Body: {
  "nome": "Novo nome",
  "autor": "Novo autor",
  "preco": 45.00,
  "imagem": "nova_url"
}

# Excluir um livro

DELETE /livros/:id

## Observações

É necessário criar o banco de dados MySQL antes de rodar a aplicação.

Sequelize sincroniza os modelos com o banco automaticamente.

Pode-se usar o Postman ou Insomnia para testar os endpoints.
