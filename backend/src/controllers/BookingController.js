const Booking = require('../models/Booking')

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers
        const { spot_id } = req.params
        const { date } = req.body

        //Persistindo no banco
        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        })

        //Usado para exibir o usuário que solicitou a reserva e qual spot que ele solicitou.
        await booking.populate('spot').populate('user').execPopulate()

        return res.json(booking)
    }
}