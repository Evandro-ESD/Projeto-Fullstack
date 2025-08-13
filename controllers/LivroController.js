import express from 'express'
import Livro from '../model/livro.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const livros = await Livro.findAll()
        res.json(livros)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const livro = await Livro.findByPk(req.params.id)
        if (livro) {
            res.json(livro)
        } else {
            res.status(404).json({ error: 'Livro não encontrado' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livro' })
    }
})

router.post('/', async (req, res) => {
    try {
        const { nome, imagem, descricao, preco } = req.body
        const novoLivro = await Livro.create({ nome, imagem, descricao, preco })
        res.status(201).json(novoLivro)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar livro' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const livro = await Livro.findByPk(req.params.id)
        if (livro) {
            await livro.destroy()
            res.json({ message: 'Livro deletado com sucesso' })
        } else {
            res.status(404).json({ error: 'Livro não encontrado' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar livro' })
    }
})

export default router
