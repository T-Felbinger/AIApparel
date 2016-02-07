//var net = require('net');
function request() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","http://127.0.0.1:8000/?Occasion=" + ($("paper-menu#occasion").prop("selected") + 1) + "&Temperature=3", true);
    xmlhttp.onreadystatechange=function(){
         if (xmlhttp.readyState==4 && xmlhttp.status==200){
           console.log("response: " + xmlhttp.response);
           console.log("responseText: " + xmlhttp.responseText);
           update(xmlhttp.responseText);
         }
   }
   xmlhttp.send();
}
//var client = new net.Socket();
//client.connect(8000, '127.0.0.1', function() {
//    console.log('Connected');
//    client.write("Hello, server!");
//});



function refresh() {
    request();
}

function update(responseText) {
    var outfit = JSON.parse(responseText);
    
    if(outfit["1_Subtype"] == "No")
        $("#Outerwear").css("display", "none");
    else    
        $("#Outerwear").css("display", "inline-block");
    
    if(outfit["2_Subtype"] == "No")
        $("#Sweater").css("display", "none");
    else    
        $("#Sweater").css("display", "inline-block");
    
    $("#Outerwear #Subtype").html("Type: " + outfit["1_Subtype"]);
    $("#Outerwear #Color").html("Color: " + outfit["1_Color"]);
    $("#Outerwear #Pattern").html("Pattern: " + outfit["1_Pattern"]);
    
    $("#Sweater #Subtype").html("Type: " + outfit["2_Subtype"]);
    $("#Sweater #Color").html("Color: " + outfit["2_Color"]);
    $("#Sweater #Pattern").html("Pattern: " + outfit["2_Pattern"]);
    
    $("#Shirt #Subtype").html("Type: " + outfit["3_Subtype"]);
    $("#Shirt #Color").html("Color: " + outfit["3_Color"]);
    $("#Shirt #Pattern").html("Pattern: " + outfit["3_Pattern"]);
    
    $("#Pants #Subtype").html("Type: " + outfit["4_Subtype"]);
    $("#Pants #Color").html("Color: " + outfit["4_Color"]);
    $("#Pants #Pattern").html("Pattern: " + outfit["4_Pattern"]);
    
    $("#Shoes #Subtype").html("Type: " + outfit["5_Subtype"]);
    $("#Shoes #Color").html("Color: " + outfit["5_Color"]);
    $("#Shoes #Pattern").html("Pattern: " + outfit["5_Pattern"]);
    
};