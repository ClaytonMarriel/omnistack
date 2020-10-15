const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const routes = require('./routes')


mongoose.connect('mongodb+srv://admin:admin@db.nklzi.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const app = express()

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)



app.listen(3333)


//GET,POST,PUT, DELETE

//req.query = acessar query params ( para filtros)
//req.params = Acessar route params (para edição,delete)
//req.body = Acessar o corpo da requisição (criação, edição)