const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const lobbies = require('./routes/lobbies')
const companions = require('./routes/companions')
const users = require('./routes/users')
const admin = require('./routes/admin')
const locations = require('./routes/locations')
const webhooks = require('./routes/webhooks')
const events = require('./routes/events')
const global = require('./routes/global')
const app = express()

app.use(bodyParser.json())
app.use(cors())

const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.use('/api/lobbies', lobbies)
app.use('/api/companions', companions)
app.use('/api/users', users)
app.use('/api/admin', admin)
app.use('/api/locations', locations)
app.use('/api/webhooks', webhooks)
app.use('/api/events', events)
app.use('/api/global', global)

module.exports = app
