require('babel-register')
const morgan = require('morgan')('dev')
const express = require('express')

const port = process.env.PORT || 8080
app = express()


app.get('/', (req, res) => {
    res.send("<h1>HELLO WORLD</h1>")
})

app.listen(port, console.log("started on port 8080"))