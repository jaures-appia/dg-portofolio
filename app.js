require('babel-register')
const morgan = require('morgan')('dev')
const express = require('express')

app = express()


app.get('/', (req, res) => {
    res.send("<h1>HELLO WORLD</h1>")
})

app.listen(8080, console.log("started on port 8080"))