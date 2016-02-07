var http = require("http");

http.createServer(function (request, response) { //here, createServer(onRequest) is taking an anonymous function (a function defined in the parameter)
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);

//var server = createServer(onRequest);
//server.listen(8888); Creates a server that only listen on 

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

var dt = new DecisionTree(training_data, class_name, features); //dt.data for the array (dt has .data, .target, and .features)

var predicted_class = dt.predict({
	color: "blue",
	shape: "hexagon"
});

var accuracy = dt.evaluate(test_data);

console.log("");
console.log("Array: " + Array.isArray(dt));
console.log("Length: " + dt.length);
console.log("");
console.log(dt);

console.log("");
console.log("Array: " + Array.isArray(dt.data));
console.log("Length: " + dt.data.length);
console.log("");
console.log(dt.data);

var treeModel = dt.toJSON(); //treeModel.vals = array (plus more information), treeModel shows much more information

console.log("");
console.log("Array: " + Array.isArray(treeModel));
console.log("Length: " + treeModel.length);
console.log("");
console.log(treeModel);

console.log("");
console.log("Array: " + Array.isArray(treeModel.vals));
console.log("Length: " + treeModel.vals.length);
console.log("");
console.log(treeModel.vals);