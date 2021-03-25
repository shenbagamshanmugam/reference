$(document).ready(function() {
    var tabs = $("#container-1");
    var tabCounter = tabs.find('ul').first().children().length;
    
    $('#add_tab').click( function(){
        var ul = tabs.find( "ul" );
        $( '<li><a href="#fragment-' + ++tabCounter + '">Call Detials</a></li>' ).appendTo( ul );
      
    });
}); 