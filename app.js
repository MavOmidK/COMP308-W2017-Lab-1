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

// About page
app.get('/about', function(req, res){
    res.send('About')
})

// Contage page
app.get('/contact', function(req,res){
    res.send('Contact')
})

// Landing Page
app.get('/', function(req, res){
    res.send('Hello World')
})


