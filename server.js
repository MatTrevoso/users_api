require('dotenv/config')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()
app.use(express.json())
app.use(cors())

// Iniciando o DB
mongoose.connect(process.env.MONGODB_ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
requireDir('./src/models')

// Rotas
app.use('/api', require('./src/routes'))
app.listen(3001)