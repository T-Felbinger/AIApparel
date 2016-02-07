// Begin HTTP server
var http = require("http");
var url = require("url");
var guessing = require("./guessing");
var tree = require("./tree");

http.createServer(function (request, response) { //here, createServer(onRequest) is taking an anonymous function (a function defined in the parameter)
    var queryData = url.parse(request.url, true).query;
    response.writeHead(200, {"Content-Type": "text/plain"});
    
    response.write("Hello World");
    console.log("Hello World!");
    
    
    
    
    response.end();
});
