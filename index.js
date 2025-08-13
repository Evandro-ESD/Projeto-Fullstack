import express from 'express'
import database from './database/db.js'
import cors from 'cors'
import controller from './controllers/LivroController.js'
import sequelize from './database/db.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.use('/livros', controller)

async function startServer() {
    try {
        await sequelize.authenticate()
        console.log('Conexão com MySql estabelecida.')

        await sequelize.sync()

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        })

    } catch (error) {
        console.log('Erro ao iniciar o servidor', error)
    }
}
startServer()
