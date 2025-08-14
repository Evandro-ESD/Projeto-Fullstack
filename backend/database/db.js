import { Sequelize } from "sequelize";

const sequelize = new Sequelize('api_fullstack', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize