const dateRouter = require("./time/time.router.js");

const express = require('express')
const app = express()

app.use('/date', dateRouter)

module.exports = app

