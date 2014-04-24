var express = require('express');
var app = express();
var port = 8080;

// get an instance of router
var router = express.Router();

// route middleware that happens on every request
router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url)

    // continue doing what we were doing and go to the route
    next();
});

app.use(function(request, response) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("404 error!\n");
});


// Routes go here

router.get('/', function(req,res) {
    res.send('this is the home page!');
});

router.get('/about', function(req,res) {
    res.send('this is the about page!');
});

router.get('/hello/:name', function(req,res) {
    res.send('hello ' + req.params.name + '!');
});

// Apply the routes to our application
app.use('/', router);


// Start the server

app.listen(port);
console.log ('Magic happens on port ' + port);