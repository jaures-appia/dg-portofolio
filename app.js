require('babel-register')
const morgan = require('morgan')('dev')
const express = require('express')

const port = process.env.PORT || 8080
app = express()


app.get('/', (req, res) => {
    res.json("{ message : hello world }")
})

app.listen(port, console.log("started on port 8080"))
