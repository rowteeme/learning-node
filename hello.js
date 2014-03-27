var http = require('http'); //include library (http)

http.createServer(function(request, response) {
	//calling createServer funciton, single paramter is a function with a request and response. 
	response.writeHead(200); //Status code in header
	response.write("Hello, this is dog"); //Response body
	response.end(); //Closing the connection
}).listen(8080); //Listen for connections on this port
console.log('Testing this!!!!');

// When this executes, and I go to localhost:8080 in my browser window, I see the "Hello this is dog" text. When I navigate to the directory and run node.js (node script.js) on this file, I get the console log message. 

// CTRL + C allows you to end the program gracefully, unbinding from any ports it is listening on.