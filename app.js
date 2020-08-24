require('babel-register')
const morgan = require('morgan')('dev')
const express = require('express')

const port = process.env.PORT || 8080
app = express()


app.get('/', (req, res) => {
    data = {
        message : "hello world"
    }
    res.json(data)
})

app.listen(port, console.log("started on port 8080"))
