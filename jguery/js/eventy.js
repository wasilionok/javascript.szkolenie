$(function() {
    'use strict';
    
    $("#first").mouseover(function() {
        $("#second").toggle(function() {
          $(this).css("background-color", "yellow");
        });
        
    });
    
//    $("#first").click(function(){
//        $(this).css("background-color", "red");
//    });
    /*$("#first").on({
        "mouseover" : function(){
            $(this).css("background-color","yellow");
        },
        "mouseleave": function(){
            $(this).css("background-color", "green");
        },
        "click" : function(){
            console.log("click click");
        }
    })*/
    
});