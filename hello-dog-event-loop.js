//Simulating long-running process.


var http = require('http');


//Create our server
http.createServer(function(request, response) { // Event #1 = Request Event
//Write status code and the response

	response.writeHead(200); //Status code - use writeHead to include a status code in the header.
	response.write("Dog is running.");
	setTimeout(function() { // Event #2 = Timeout Event - everytime a request comes in, it will create a new timeout event.

		response.write("Dog is done."); // Writing Dog is done to the response.
		response.end(); // .end() tells the response to end (duh) so client knows that it's received all the data
	}, 5000); // Pause 5 seconds to simulate long running process
}).listen(8080); //Listen on port 8080

// When I navigate to localhost:8080 in my browser, it takes about 5 seconds to execute, then I see both write responses, indicating the 

