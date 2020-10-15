//index: retorna listagem de sessões
//show: listar uma unica sessão
//store: Criar uma sessão
//update: Editar uma sessão
//destroy: Apagar uma sessão
const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { email } = req.body //Utilizando a destruturação, onde busco informações de dentro de uma variavel7

        let user = await User.findOne({ email }) // pesquisando pelo "email"

        if (!user) {
            user = await User.create({ email })  // Criar usuário
        }

        return res.json(user) // retornando como objeto
    }
}