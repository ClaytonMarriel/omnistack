const mongoose = require('mongoose')

//Monta a estrutura do usuário, quais campos ele irá obter
const UserSchema = new mongoose.Schema({
    email: String,
})

module.exports = mongoose.model('User', UserSchema) // criando o model
