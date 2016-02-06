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
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Black", "Pattern": "Solid", "Occassion": "Any", "Temperature": "1", "Body": "2"}
];
var outerwear = [
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Black", "Pattern": "Solid", "Occassion": "Any", "Temperature": "1", "Body": "2"}
];
var sweaters = [
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Black", "Pattern": "Solid", "Occassion": "Any", "Temperature": "1", "Body": "2"}
];
var pants = [
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Black", "Pattern": "Solid", "Occassion": "Any", "Temperature": "1", "Body": "2"}
];
var shoes = [
    {"Type": "Shirt", "Subtype": "Polo", "Color": "Black", "Pattern": "Solid", "Occassion": "Any", "Temperature": "1", "Body": "2"}
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
    var sweater =  UserCloset.shirts[Math.round(Math.random() * (UserCloset.sweater.length - 1))];
    var outerwear =  UserCloset.shirts[Math.round(Math.random() * (UserCloset.outerwear.length - 1))];
    var pants =  UserCloset.shirts[Math.round(Math.random() * (UserCloset.pants.length - 1))];
    var shoes =  UserCloset.shirts[Math.round(Math.random() * (UserCloset.pants.length - 1))];
    
    console.log(shirt);
    $("#shirt").html(printSrc(shirt));
    $("#sweater").html(printSrc(sweater));
    $("#outerwear").html(printSrc(outerwear));
    $("#pants").html(printSrc(pants));
    $("#shoes").html(printSrc(shoes));
    
}
    
    
function yes() {
    $("#final").append("{" + $("#outerwear").html() + $("#sweater").html() + $("#shirt").html() + $("#pants").html() + $("#shoes").html() + "},</br>");
}