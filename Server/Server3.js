var http = require("http");

http.createServer(function (request, response) { //here, createServer(onRequest) is taking an anonymous function (a function defined in the parameter)
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);

var DecisionTree = require('decision-tree');

var training_data = [
   /* {"1Type": 0, "1Subtype": 0, "1Color": 0, "1Pattern": 0, "1Occassion": 0, "1Temperature": 0, "1Body": 0, "2Type": 0, "2Subtype": 0, "2Color": 0, "2Pattern": 0, "2Occassion": 0, "2Temperature": 0, "2Body": 0, "3Type": 0, "3Subtype": 0, "3Color": 0, "3Pattern": 0, "3Occassion": 0, "3Temperature": 0, "3Body": 0, "4Type": 0, "4Subtype": 0, "4Color": 0, "4Pattern": 0, "4Occassion": 0, "4Temperature": 0, "4Body": 0, "5Type": 0, "5Subtype": 0, "5Color": 0, "5Pattern": 0, "5Occassion": 0, "5Temperature": 0, "5Body": 0, "Accept": 0},*/
    
    
    {"1Type": 0, "1Subtype": 0, "1Color": 0, "1Pattern": 0, "1Occassion": 0, "1Temperature": 0, "1Body": 0, "2Type": 0, "2Subtype": 0, "2Color": 0, "2Pattern": 0, "2Occassion": 0, "2Temperature": 0, "2Body": 0, "3Type": "Shirt", "3Subtype": "Polo", "3Color": "Black", "3Pattern": "Solid", "3Occassion": "Any", "3Temperature": 1, "3Body": 2, "4Type": "Pants", "4Subtype": "Jeans", "4Color": "Silver", "4Pattern": "Solid", "4Occassion": 2, "4Temperature": 3, "4Body": 3, "5Type": "Shoes", "5Subtype": "Skate", "5Color": "Red", "5Pattern": "Canvas", "5Occassion": 2, "5Temperature": 3, "5Body": 4, "Accept": true},
    {"1Type": "Outerwear", "1Subtype": "Jacket", "1Color": "Grey", "1Pattern": "Waterproof", "1Occassion": 3, "1Temperature": 4, "1Body": 2, "2Type": 0, "2Subtype": 0, "2Color": 0, "2Pattern": 0, "2Occassion": 0, "2Temperature": 0, "2Body": 0, "3Type": "Shirt", "3Subtype": "Button Down", "3Color": "Grey", "3Pattern": "Solid", "3Occassion": 3, "3Temperature": 2, "3Body": 2, "4Type": "Pants", "4Subtype": "Chino", "4Color": "Khaki", "4Pattern": "Solid", "4Occassion": 4, "4Temperature": 3, "4Body": 3, "5Type": "Shoes", "5Subtype": "Boots", "5Color": "Brown", "5Pattern": "Leather", "5Occassion": 2, "5Temperature": 3, "5Body": 4, "Accept": true},
    {"1Type": 0, "1Subtype": 0, "1Color": 0, "1Pattern": 0, "1Occassion": 0, "1Temperature": 0, "1Body": 0, "2Type": "Sweater", "2Subtype": "Heavy", "2Color": "Black", "2Pattern": "Aztec", "2Occassion": 1, "2Temperature": 4, "2Body": 2, "3Type": "Shirt", "3Subtype": "Dress", "3Color": "Pink", "3Pattern": "Solid", "3Occassion": 4, "3Temperature": 1, "3Body": 2, "4Type": "Pants", "4Subtype": "Shorts", "4Color": "Blue", "4Pattern": "Checkered", "4Occassion": 1, "4Temperature": 1, "4Body": 3, "5Type": "Shoes", "5Subtype": "Skate", "5Color": "Red", "5Pattern": "Canvas", "5Occassion": 2, "5Temperature": 3, "5Body": 4, "Accept": false},
    {"1Type": "Outerwear", "1Subtype": "Jacket", "1Color": "Grey", "1Pattern": "Ski", "1Occassion": 1, "1Temperature": 5, "1Body": 2, "2Type": "Sweater", "2Subtype": "Medium", "2Color": "Yellow", "2Pattern": "Solid", "2Occassion": 1, "2Temperature": 4, "2Body": 2, "3Type": "Shirt", "3Subtype": "Dress", "3Color": "Maroon", "3Pattern": "Solid", "3Occassion": 4, "3Temperature": 1, "3Body": 2, "4Type": "Pants", "4Subtype": "Shorts", "4Color": "Blue", "4Pattern": "Checkered", "4Occassion": 1, "4Temperature": 1, "4Body": 3, "5Type": "Shoes", "5Subtype": "Athletic", "5Color": "Black", "5Pattern": "Highlights", "5Occassion": 1, "5Temperature": 1, "5Body": 4, "Accept": false}
    
];

var class_name = "Accept";

var features = ["1Type", "1Subtype", "1Color", "1Pattern", "1Occassion", "1Temperature", "1Body", "2Type", "2Subtype", "2Color", "2Pattern", "2Occassion", "2Temperature", "2Body", "3Type", "3Subtype", "3Color", "3Pattern", "3Occassion", "3Temperature", "3Body", "4Type", "4Subtype", "4Color", "4Pattern", "4Occassion", "4Temperature", "4Body", "5Type", "5Subtype", "5Color", "5Pattern", "5Occassion", "5Temperature", "5Body"];

var dt = new DecisionTree(training_data, class_name, features);

var predicted_class = dt.predict(
    {"1Type": 0, "1Subtype": 0, "1Color": 0, "1Pattern": 0, "1Occassion": 0, "1Temperature": 0, "1Body": 0, "2Type": 0, "2Subtype": 0, "2Color": 0, "2Pattern": 0, "2Occassion": 0, "2Temperature": 0, "2Body": 0, "3Type": "Shirt", "3Subtype": "Polo", "3Color": "Black", "3Pattern": "Solid", "3Occassion": "Any", "3Temperature": 1, "3Body": 2, "4Type": "Pants", "4Subtype": "Jeans", "4Color": "Silver", "4Pattern": "Solid", "4Occassion": 2, "4Temperature": 3, "4Body": 3, "5Type": "Shoes", "5Subtype": "Skate", "5Color": "Red", "5Pattern": "Canvas", "5Occassion": 2, "5Temperature": 3, "5Body": 4}
    
   /* {"1Type": "Outerwear", "1Subtype": "Jacket", "1Color": "Grey", "1Pattern": "Waterproof", "1Occassion": 3, "1Temperature": 4, "1Body": 2, "2Type": 0, "2Subtype": 0, "2Color": 0, "2Pattern": 0, "2Occassion": 0, "2Temperature": 0, "2Body": 0, "3Type": "Shirt", "3Subtype": "Polo", "3Color": "Black", "3Pattern": "Solid", "3Occassion": "Any", "3Temperature": 1, "3Body": 2, "4Type": "Pants", "4Subtype": "Shorts", "4Color": "Blue", "4Pattern": "Checkered", "4Occassion": 1, "4Temperature": 1, "4Body": 3, "5Type": "Shoes", "5Subtype": "Skate", "5Color": "Red", "5Pattern": "Canvas", "5Occassion": 2, "5Temperature": 3, "5Body": 4}*/
    
);
predicted_class = predicted_class.toString();

var accuracy = dt.evaluate(predicted_class);

console.log("");
console.log(accuracy);

    /*
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Black", "Pattern": "Solid", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "White", "Pattern": "Solid", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Dark Blue", "Pattern": "Solid", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Light", "Pattern": "Solid", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Heavy", "Color": "Black", "Pattern": "Aztec", "Occassion": "2", "Temperature": "4", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Sweater Jacket", "Color": "Grey", "Pattern": "Solid", "Occassion": "4", "Temperature": "4", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Medium", "Color": "Grey", "Pattern": "Solid", "Occassion": "2", "Temperature": "4", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Medium", "Color": "Grey", "Pattern": "Solid", "Occassion": "4", "Temperature": "4", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Medium", "Color": "Green", "Pattern": "Solid", "Occassion": "4", "Temperature": "4", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Medium", "Color": "Dark Blue", "Pattern": "Solid", "Occassion": "2", "Temperature": "4", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Medium", "Color": "Yellow", "Pattern": "Solid", "Occassion": "4", "Temperature": "4", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Light", "Color": "Orange", "Pattern": "Solid", "Occassion": "3", "Temperature": "3", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Light", "Color": "Dark Blue", "Pattern": "Solid", "Occassion": "2", "Temperature": "4", "Body": "2"},
    */