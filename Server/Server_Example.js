var DecisionTree = require('decision-tree');

var training_data = [
	{"color":"blue", "shape":"square", "liked":false},
	{"color":"red", "shape":"square", "liked":false},
	{"color":"blue", "shape":"circle", "liked":true},
	{"color":"red", "shape":"circle", "liked":true},
	{"color":"blue", "shape":"hexagon", "liked":false},
	{"color":"red", "shape":"hexagon", "liked":false},
	{"color":"yellow", "shape":"hexagon", "liked":true},
	{"color":"yellow", "shape":"circle", "liked":true}
];

var test_data = [
	{"color":"blue", "shape":"hexagon", "liked":false},
	{"color":"red", "shape":"hexagon", "liked":false},
	{"color":"yellow", "shape":"hexagon", "liked":true},
	{"color":"yellow", "shape":"circle", "liked":true}
];

var class_name = "liked";

var features = ["color", "shape"];

var dt = new DecisionTree(training_data, class_name, features);

var predicted_class = dt.predict({
	color: "blue",
	shape: "hexagon"
});

var accuracy = dt.evaluate(test_data);

var treeModel = dt.toJSON();

console.log("Can you hear me?");
console.log("");
console.log("Tree Model:")
console.log(treeModel);


var http = require("http");

http.createServer(function (request, response) { //here, createServer(onRequest) is taking an anonymous function (a function defined in the parameter)
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);

//var server = createServer(onRequest);
//server.listen(8888); Creates a server that only listen on 
