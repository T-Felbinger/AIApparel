// Begin Decision Tree

var DecisionTree = require('decision-tree');

var training_data = [
   /* {"1Type": 0, "1Subtype": 0, "1Color": 0, "1Pattern": 0, "1Occasion": 0, "1Temperature": 0, "1Body": 0, "2Type": 0, "2Subtype": 0, "2Color": 0, "2Pattern": 0, "2Occasion": 0, "2Temperature": 0, "2Body": 0, "3Type": 0, "3Subtype": 0, "3Color": 0, "3Pattern": 0, "3Occasion": 0, "3Temperature": 0, "3Body": 0, "4Type": 0, "4Subtype": 0, "4Color": 0, "4Pattern": 0, "4Occasion": 0, "4Temperature": 0, "4Body": 0, "5Type": 0, "5Subtype": 0, "5Color": 0, "5Pattern": 0, "5Occasion": 0, "5Temperature": 0, "5Body": 0, "Accept": 0},*/ 
    
//    {"1_Type": "Outerwear","1_Subtype": "Jacket","1_Color": "Black","1_Pattern": "Down","1_Occasion": "3","1_Temperature": "5","1_Body": "2","2_Type": "Sweater","2_Subtype": "Medium","2_Color": "Grey","2_Pattern": "No","2_Occasion": "3","2_Temperature": "4","2_Body": "2","3_Type": "Shirt","3_Subtype": "Dress","3_Color": "Maroon","3_Pattern": "No","3_Occasion": "4","3_Temperature": "0","3_Body": "2","4_Type": "Pants","4_Subtype": "Chino","4_Color": "Green","4_Pattern": "No","4_Occasion": "3","4_Temperature": "2","4_Body": "3","5_Type": "Shoes","5_Subtype": "Boots","5_Color": "Brown","5_Pattern": "Leather","5_Occasion": "3","5_Temperature": "4","5_Body": "4","accepted": true},
//{"1_Type": "Outerwear","1_Subtype": "Jacket","1_Color": "Grey","1_Pattern": "Waterproof","1_Occasion": "3","1_Temperature": "6","1_Body": "2","2_Type": "Sweater","2_Subtype": "Medium","2_Color": "Blue","2_Pattern": "Yes","2_Occasion": "2","2_Temperature": "4","2_Body": "2","3_Type": "Shirt","3_Subtype": "Polo","3_Color": "Purple","3_Pattern": "No","3_Occasion": "Any","3_Temperature": "1","3_Body": "2","4_Type": "Pants","4_Subtype": "Jeans","4_Color": "Grey","4_Pattern": "No","4_Occasion": "3","4_Temperature": "2","4_Body": "3","5_Type": "Shoes","5_Subtype": "Skate","5_Color": "Red","5_Pattern": "Canvas","5_Occasion": "2","5_Temperature": "1","5_Body": "4","accepted": false},
//{"1_Type": "Outerwear","1_Subtype": "Vest","1_Color": "Grey","1_Pattern": "Down","1_Occasion": "3","1_Temperature": "5","1_Body": "2","2_Type": "Sweater","2_Subtype": "Medium","2_Color": "Dark Blue","2_Pattern": "No","2_Occasion": "3","2_Temperature": "3","2_Body": "2","3_Type": "Shirt","3_Subtype": "Polo","3_Color": "Turquoise","3_Pattern": "No","3_Occasion": "Any","3_Temperature": "1","3_Body": "2","4_Type": "Pants","4_Subtype": "Jeans","4_Color": "Grey","4_Pattern": "No","4_Occasion": "3","4_Temperature": "2","4_Body": "3","5_Type": "Shoes","5_Subtype": "Boots","5_Color": "Brown","5_Pattern": "Leather","5_Occasion": "3","5_Temperature": "4","5_Body": "4","accepted": false},
//{"1_Type": "Outerwear","1_Subtype": "Jacket","1_Color": "Grey","1_Pattern": "Ski","1_Occasion": "3","1_Temperature": "6","1_Body": "2","2_Type": "Sweater","2_Subtype": "Medium","2_Color": "Grey","2_Pattern": "No","2_Occasion": "3","2_Temperature": "4","2_Body": "2","3_Type": "Shirt","3_Subtype": "Polo","3_Color": "Light Grey","3_Pattern": "No","3_Occasion": "Any","3_Temperature": "1","3_Body": "2","4_Type": "Pants","4_Subtype": "Jeans","4_Color": "Blue","4_Pattern": "No","4_Occasion": "3","4_Temperature": "2","4_Body": "3","5_Type": "Shoes","5_Subtype": "Chuckas","5_Color": "Blue","5_Pattern": "Raw Leather","5_Occasion": "3","5_Temperature": "1","5_Body": "4","accepted": true},
//{"1_Type": "Outerwear","1_Subtype": "Jacket","1_Color": "Grey","1_Pattern": "Waterproof","1_Occasion": "3","1_Temperature": "6","1_Body": "2","2_Type": "Sweater","2_Subtype": "Light","2_Color": "Yellow","2_Pattern": "No","2_Occasion": "4","2_Temperature": "3","2_Body": "2","3_Type": "Shirt","3_Subtype": "Button Down","3_Color": "White","3_Pattern": "Flanel","3_Occasion": "3","3_Temperature": "2","3_Body": "2","4_Type": "Pants","4_Subtype": "Shorts","4_Color": "Navy","4_Pattern": "No","4_Occasion": "3","4_Temperature": "2","4_Body": "3","5_Type": "Shoes","5_Subtype": "Athletic","5_Color": "Black","5_Pattern": "Yes","5_Occasion": "1","5_Temperature": "1","5_Body": "4","accepted": false}
    
    
];

var class_name = "accepted";

var features = ["1_Type", "1_Subtype", "1_Color", "1_Pattern", "1_Occasion", "1_Temperature", "1_Body", "2_Type", "2_Subtype", "2_Color", "2_Pattern", "2_Occasion", "2_Temperature", "2_Body", "3_Type", "3_Subtype", "3_Color", "3_Pattern", "3_Occasion", "3_Temperature", "3_Body", "4_Type", "4_Subtype", "4_Color", "4_Pattern", "4_Occasion", "4_Temperature", "4_Body", "5_Type", "5_Subtype", "5_Color", "5_Pattern", "5_Occasion", "5_Temperature", "5_Body"];

var dt = new DecisionTree(training_data, class_name, features);

//var predicted_class = dt.predict(
//    {"1_Type": "Outerwear","1_Subtype": "Jacket","1_Color": "Grey","1_Pattern": "Waterproof","1_Occasion": "3","1_Temperature": "6","1_Body": "2","2_Type": "Sweater","2_Subtype": "Light","2_Color": "Green","2_Pattern": "No","2_Occasion": "4","2_Temperature": "3","2_Body": "2","3_Type": "Shirt","3_Subtype": "Dress","3_Color": "Maroon","3_Pattern": "No","3_Occasion": "4","3_Temperature": "0","3_Body": "2","4_Type": "Pants","4_Subtype": "Chino","4_Color": "Green","4_Pattern": "No","4_Occasion": "3","4_Temperature": "2","4_Body": "3","5_Type": "Shoes","5_Subtype": "Athletic","5_Color": "Black","5_Pattern": "Yes","5_Occasion": "1","5_Temperature": "1","5_Body": "4"}
//);

//console.log("");
//console.log("Good: " + predicted_class);
