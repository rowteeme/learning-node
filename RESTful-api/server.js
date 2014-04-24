//BASE SETUP
// ========================================================

// call the packages we pulled in using NPM (located in Node_Modules)

var express    = require('express'); // call express
var bodyParser = require('body-parser'); // configure app to use bodyParser() - this will let us get the data from a POST request
var app        = express(); // define our app using express



app.use(bodyParser()); // Here we're configuring our app to use it

var port = process.env.PORT || 8080; // setting our port
var mongoose   = require('mongoose'); // call mongoose for database

mongoose.connect('mongodb://<test:test@novus.modulusmongo.net:27017/torohU7j'); //connecting to our database

var Bear = require('./app/models/bear'); // Pulling in the bear.js file that we created into server.js for use within our application.
// ========================================================

//ROUTES FOR OUR API

var router = express.Router(); // we're getting an instance of the express Router

// middleware to use for all requests

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening');
    next(); // make sure we go to the next routes and don't stop here
});

// Here we're testing the route to make sure everything is working correctly when we navigate to localhost:8080/api
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' }); // Response sent when you hit the root
});


// on routes that end in /bears

router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var bear = new Bear();      // create a new instance of the Bear model
        bear.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        bear.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                console.log('Saved bear');
            }

            res.json({ message: 'Bear created!' });
            console.log('Bear created');
        });
    });



// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api

app.use('/api', router);

// ========================================================

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);

