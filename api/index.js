const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const example = require('./routes/example')
const app = express()

app.use(bodyParser.json())
app.use(cors())


app.use('/api/example', example)

module.exports = app
