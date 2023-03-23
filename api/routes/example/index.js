const example = require('express').Router()
//Lobbies
example.get('/', (req, res) => res.send('works').status(200))

module.exports = example