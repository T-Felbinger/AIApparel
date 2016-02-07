function request() {
    var books= []; // Array that will contain all books
    $(document).ready(function() {
        // http request
           $.getJSON("localhost/?occ=" + $("paper-menu#occassion").prop("selected") + "&temp=3", function(data) {
              $.each(data, function(i, val){
             books.push(val);
              });
        alert(books) ;
            });
    });
}


function interpret(output) {
    var myobj = JSON.parse('{ "hello":"world" }');
    
    console.log(myobj.hello);
    
}
interpret("a");