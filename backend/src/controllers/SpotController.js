const User = require('../models/User')
const Spot = require('../models/Spot')


module.exports = {

    //Criando o Filtro das Techs (Listagem de Spots)
    async index(req, res) {

        const { tech } = req.query

        const spots = await Spot.find({ techs: tech })

        return res.json(spots)
    },


    async store(req, res) {
        const { filename } = req.file
        const { company, techs, price } = req.body
        const { user_id } = req.headers

        const user = await User.findById(user_id)

        if (!user) { // Verificando existencia do usuário 
            return res.status(400).json({ error: 'User does not exists' })
        }

        //Criando e persistindo no banco
        const spot = await Spot.create({
            user: user_id, //pegando o id do usuário
            thumbmail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()), // convertendo uma string para um array, utilizando o split, que divide a string com virgulas e o trim, tira espaços vazios
            price
        })

        return res.json(spot)
    }
}