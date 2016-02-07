var print = function(o){
    var str='';

    for(var p in o){
        if(typeof o[p] == 'string'){
            str+= p + ': ' + o[p]+'; </br>';
        }else{
            str+= p + ': { </br>' + print(o[p]) + '}';
        }
    }

    return str;
}

var printSrc = function(o){
    var str='';

    for(var p in o){
        if(typeof o[p] == 'string'){
            str+= '"' + srcKey[o["Type"]] + p + '"' + ': ' + '"'  + o[p] + '"' +',';
        }else{
            str+= p + ': { </br>' + print(o[p]) + '}';
        }
    }

    return str;
}

var srcKey = {
    "Outerwear": "1_",
    "Sweater": "2_",
    "Shirt": "3_",
    "Pants": "4_",
    "Shoes": "5_"
}

var shirts = [
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Black", "Pattern": "No", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Dark Grey", "Pattern": "No", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Light Grey", "Pattern": "No", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "White", "Pattern": "No", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Dark Grey", "Pattern": "No", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Purple", "Pattern": "No", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Dark Blue", "Pattern": "No", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Light Blue", "Pattern": "No", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Light Blue", "Pattern": "No", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Turquoise", "Pattern": "No", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Lime Green", "Pattern": "No", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Orange", "Pattern": "No", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Teal", "Pattern": "No", "Occassion": "Any", "Temperature": "1", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Dress", "Color": "Black", "Pattern": "No", "Occassion": "4", "Temperature": "0", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Dress", "Color": "Black", "Pattern": "No", "Occassion": "4", "Temperature": "0", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Dress", "Color": "Light Blue", "Pattern": "No", "Occassion": "4", "Temperature": "0", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Dress", "Color": "Blue", "Pattern": "Pinstripe", "Occassion": "4", "Temperature": "0", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Dress", "Color": "Dark Blue", "Pattern": "Pinstripe", "Occassion": "4", "Temperature": "0", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Dress", "Color": "Blue", "Pattern": "No", "Occassion": "4", "Temperature": "0", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Dress", "Color": "White", "Pattern": "Yes", "Occassion": "4", "Temperature": "0", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Dress", "Color": "Pink", "Pattern": "No", "Occassion": "4", "Temperature": "0", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Dress", "Color": "Maroon", "Pattern": "No", "Occassion": "4", "Temperature": "0", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Dress", "Color": "White", "Pattern": "No", "Occassion": "4", "Temperature": "0", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Dress", "Color": "White", "Pattern": "No", "Occassion": "4", "Temperature": "0", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Dress", "Color": "Blue", "Pattern": "Pinstripe", "Occassion": "4", "Temperature": "0", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Dress", "Color": "White", "Pattern": "Pinstripe", "Occassion": "4", "Temperature": "0", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Button Down", "Color": "Grey", "Pattern": "No", "Occassion": "3", "Temperature": "2", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Button Down", "Color": "Brown", "Pattern": "Plaid", "Occassion": "3", "Temperature": "2", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Button Down", "Color": "Blue", "Pattern": "Plaid", "Occassion": "3", "Temperature": "2", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Button Down", "Color": "Maroon", "Pattern": "No", "Occassion": "3", "Temperature": "2", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Button Down", "Color": "White", "Pattern": "Flanel", "Occassion": "3", "Temperature": "2", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Button Down", "Color": "Pink", "Pattern": "No", "Occassion": "3", "Temperature": "2", "Body": "2"},
    {"Type": "Shirt", "Subtype": "Button Down", "Color": "Maroon", "Pattern": "No", "Occassion": "3", "Temperature": "2", "Body": "2"},
];
var outerwear = [
    {"Type": "Outerwear", "Subtype": "No", "Color": "No", "Pattern": "No", "Occassion": "No", "Temperature": "No", "Body": "No"},
    {"Type": "Outerwear", "Subtype": "Jacket", "Color": "Black", "Pattern": "Down", "Occassion": "3", "Temperature": "5", "Body": "2"},
    {"Type": "Outerwear", "Subtype": "Jacket", "Color": "Grey", "Pattern": "Waterproof", "Occassion": "3", "Temperature": "6", "Body": "2"},
    {"Type": "Outerwear", "Subtype": "Jacket", "Color": "Grey", "Pattern": "Fleece", "Occassion": "3", "Temperature": "4", "Body": "2"},
    {"Type": "Outerwear", "Subtype": "Jacket", "Color": "Grey", "Pattern": "Ski", "Occassion": "3", "Temperature": "6", "Body": "2"},
    {"Type": "Outerwear", "Subtype": "Vest", "Color": "Grey", "Pattern": "Down", "Occassion": "3", "Temperature": "5", "Body": "2"},
];
var sweaters = [
    {"Type": "sweater", "Subtype": "No", "Color": "No", "Pattern": "No", "Occassion": "No", "Temperature": "No", "Body": "No"},
    {"Type": "Sweater", "Subtype": "Heavy", "Color": "Black", "Pattern": "Yes", "Occassion": "3", "Temperature": "4", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Heavy", "Color": "Dark Green", "Pattern": "No", "Occassion": "3", "Temperature": "4", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Heavy", "Color": "Grey", "Pattern": "No", "Occassion": "4", "Temperature": "3", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Medium", "Color": "Grey", "Pattern": "No", "Occassion": "3", "Temperature": "4", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Medium", "Color": "Grey", "Pattern": "No", "Occassion": "3", "Temperature": "4", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Light", "Color": "Grey", "Pattern": "No", "Occassion": "3", "Temperature": "3", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Medium", "Color": "Green", "Pattern": "No", "Occassion": "3", "Temperature": "4", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Medium", "Color": "Dark Blue", "Pattern": "No", "Occassion": "2", "Temperature": "4", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Medium", "Color": "Blue", "Pattern": "Yes", "Occassion": "2", "Temperature": "4", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Light", "Color": "Yellow", "Pattern": "No", "Occassion": "4", "Temperature": "3", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Light", "Color": "Orange", "Pattern": "No", "Occassion": "3", "Temperature": "3", "Body": "2"},
    {"Type": "Sweater", "Subtype": "Medium", "Color": "Dark Blue", "Pattern": "No", "Occassion": "3", "Temperature": "3", "Body": "2"},
];
var pants = [
    {"Type": "Pants", "Subtype": "Jeans", "Color": "Silver", "Pattern": "No", "Occassion": "3", "Temperature": "2", "Body": "3"},
    {"Type": "Pants", "Subtype": "Jeans", "Color": "Grey", "Pattern": "No", "Occassion": "3", "Temperature": "2", "Body": "3"},
    {"Type": "Pants", "Subtype": "Chino", "Color": "Khaki", "Pattern": "No", "Occassion": "3", "Temperature": "2", "Body": "3"},
    {"Type": "Pants", "Subtype": "Chino", "Color": "Green", "Pattern": "No", "Occassion": "3", "Temperature": "2", "Body": "3"},
    {"Type": "Pants", "Subtype": "Jeans", "Color": "Blue", "Pattern": "No", "Occassion": "3", "Temperature": "2", "Body": "3"},
    {"Type": "Pants", "Subtype": "Shorts", "Color": "Navy", "Pattern": "No", "Occassion": "3", "Temperature": "2", "Body": "3"},
    {"Type": "Pants", "Subtype": "Shorts", "Color": "White", "Pattern": "Plaid", "Occassion": "3", "Temperature": "2", "Body": "3"},
    {"Type": "Pants", "Subtype": "Shorts", "Color": "Grey", "Pattern": "No", "Occassion": "3", "Temperature": "2", "Body": "3"},
];
var shoes = [
    {"Type": "Shoes", "Subtype": "Dress", "Color": "Black", "Pattern": "No", "Occassion": "5", "Temperature": "1", "Body": "4"},
    {"Type": "Shoes", "Subtype": "Chuckas", "Color": "Blue", "Pattern": "Raw Leather", "Occassion": "3", "Temperature": "1", "Body": "4"},
    {"Type": "Shoes", "Subtype": "Chuckas", "Color": "Grey", "Pattern": "Raw Leather", "Occassion": "3", "Temperature": "1", "Body": "4"},
    {"Type": "Shoes", "Subtype": "Boots", "Color": "Brown", "Pattern": "Leather", "Occassion": "3", "Temperature": "4", "Body": "4"},
    {"Type": "Shoes", "Subtype": "Athletic", "Color": "Black", "Pattern": "Yes", "Occassion": "1", "Temperature": "1", "Body": "4"},
    {"Type": "Shoes", "Subtype": "Skate", "Color": "Red", "Pattern": "Canvas", "Occassion": "2", "Temperature": "1", "Body": "4"},
];

    
var UserCloset = {
    shirts: shirts,
    outerwear: outerwear,
    sweater: sweaters,
    pants: pants,
    shoes: shoes    
};



function teach() {
    var shirt =  UserCloset.shirts[Math.round(Math.random() * (UserCloset.shirts.length - 1))];
    var sweater =  UserCloset.sweater[Math.round(Math.random() * (UserCloset.sweater.length - 1))];
    var outerwear =  UserCloset.outerwear[Math.round(Math.random() * (UserCloset.outerwear.length - 1))];
    var pants =  UserCloset.pants[Math.round(Math.random() * (UserCloset.pants.length - 1))];
    var shoes =  UserCloset.shoes[Math.round(Math.random() * (UserCloset.shoes.length - 1))];
    
    console.log(shirt);
    $("#shirt").html(printSrc(shirt));
    $("#sweater").html(printSrc(sweater));
    $("#outerwear").html(printSrc(outerwear));
    $("#pants").html(printSrc(pants));
    $("#shoes").html(printSrc(shoes));
    
}
    
    
function yes() {
    $("#final").append("{" + $("#outerwear").html() + $("#sweater").html() + $("#shirt").html() + $("#pants").html() + $("#shoes").html() + '"accepted": true},</br>');
    teach();
}

function no() {
    $("#final").append("{" + $("#outerwear").html() + $("#sweater").html() + $("#shirt").html() + $("#pants").html() + $("#shoes").html() + '"accepted": false},</br>');
    teach();
}

teach();