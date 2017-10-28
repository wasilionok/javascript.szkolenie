$(function(){
    'use strict';
//    $("#first").hide(1000).show(1000);
//    
   /* $("#first").fadeOut(2000).fadeIn(2000);
    */
    
    /*$("#first").slideUp(3000).slideDown(3000);*/
    
    function callbackZwroty(){
        console.log("Zakończono pierwszą animacje. Uwaga! Startuje druga! :)");
        $("#first").animate({"font-size" : "1em", "margin-left" : "0px"}, 3000);
    };
//   callbackZwroty();
    $("#first").animate({"font-size" : "4em", "margin-left" : "250px"},3000, callbackZwroty);
});