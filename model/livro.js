import { DataTypes } from "sequelize";
// import sequelize from "../database/db";
import db from '../database/db.js'


const Livro = db.define('Livro', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
},{
    tableName: 'livros',
    timestamps: false
});

export default Livro