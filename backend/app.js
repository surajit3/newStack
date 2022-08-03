const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/user-routes')

const app = express()

// middleware - body-perser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// url middlewares
app.use('/user', router)

module.exports = app;