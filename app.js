// Lab 1 - Express server

// important 3rd party module 'express'
let express = require('express')

// created the express???
let app = express()

// set port to 3000
const port = 3000;

// setup the event loop - listens on port 3000
app.listen(port);
console.log(`Server listening at port: ${port}`)

// Hello World Route
app.get('/', function(req, res){
    res.send('Hello World')
})

