const mongoose = require('mongoose')

const SpotSchema = new mongoose.Schema({
    //Criação dos campos
    thumbmail: String,
    company: String,
    price: Number,
    techs: [String], //criado um array para as informações que poderão ser adicionadas
    user: { // aqui identifica o usuário que cadastrou as empresas
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    }
})

SpotSchema.virtual('thumbmail_url').get(function () {
    return `http://localhost:3333/files/${this.thumbmail}`
})

module.exports = mongoose.model('Spot', SpotSchema)