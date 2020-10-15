const Spot = require('../models/Spot')

module.exports = {
    async show(req, res) { // exibir o dashboard
        //Listagem do usuário logado
        const { user_id } = req.headers //pegando o ID do usuário logado

        const spots = await Spot.find({ user: user_id }) // Buscando todos os spots// Comparando o user(do banco) com o user_id que está vindo através do cabeçalho

        return res.json(spots)
    }
}