const mongoose = require('mongoose')

//Criando o model de booking, os campos necessários
const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: { // Realiza o relacionamento com o usuário , identificando qual está solicitando a reserva
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    spot: {
        type: mongoose.Schema.Types.ObjectId, // Identifica qual serviço ele está solicitando ter acesso
        ref: 'Spot'
    }
})

module.exports = mongoose.model('Booking', BookingSchema)