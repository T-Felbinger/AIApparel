function request() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","localhost:8000/?Occasion=" + ($("paper-menu#occasion").prop("selected") + 1) + "&temp=3", true);
    xmlhttp.onreadystatechange=function(){
         if (xmlhttp.readyState==4 && xmlhttp.status==200){
           string=xmlhttp.responseText;
         }
   }
   xmlhttp.send();
}


function refresh() {
    
    var outfit = JSON.parse(request());
    
    $("#Outerwear #Subtype").html("outfit.1_Subtype");
    $("#Outerwear #Color").html("outfit.1_Color");
    $("#Outerwear #Pattern").html("outfit.1_Pattern");
    
    $("#Sweater #Subtype").html("outfit.2_Subtype");
    $("#Sweater #Color").html("outfit.2_Color");
    $("#Sweater #Pattern").html("outfit.2_Pattern");
    
    $("#Shirt #Subtype").html("outfit.3_Subtype");
    $("#Shirt #Color").html("outfit.3_Color");
    $("#Shirt #Pattern").html("outfit.3_Pattern");
    
    $("#Pants #Subtype").html("outfit.4_Subtype");
    $("#Pants #Color").html("outfit.4_Color");
    $("#Pants #Pattern").html("outfit.4_Pattern");
    
    $("#Shoes #Subtype").html("outfit.5_Subtype");
    $("#Shoes #Color").html("outfit.5_Color");
    $("#Shoes #Pattern").html("outfit.5_Pattern");
    
}
interpret("a");