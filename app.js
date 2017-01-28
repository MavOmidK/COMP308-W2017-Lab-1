// Lab 1 - Express server

// important 3rd party module 'express'
let express = require('express')

// created the express???
let app = express()

// unknown as of right now
//var router = express.Router();

// setting the absolute value of the path + the folder where HTML files are kept
let path = __dirname + '/views/'

// set port to 3000
//const port = 8080;

// setup the event loop - listens on port 3000
app.listen(() => {
    console.log("Server started");
});
console.log(`Server listening at port: ${port}`)

// About page
app.get('/about', function(req, res){
 res.sendFile(path + 'about.html')
})

// Contage page
app.get('/contact', function(req,res){
 res.sendFile(path + 'contact.html')
})

// Landing Page
app.get('/', function(req, res){
    res.sendFile(path + 'index.html')
})


