$(document).ready(function(){
    $(".menu_button").click(function(){
        $("#landing").toggle();
        $("#bottom-image").fadeToggle();
    });
    
    $(".menu_button.btn0").click(function(){
        $(".panel.orange").slideToggle();
        $(".panel.green").slideUp();
        $(".panel.red").slideUp();
        $(".panel.turquese").slideUp();
        
        if ($('.panel.green').is(':hidden') ||
           $('.panel.red').is(':hidden') || 
           $('.panel.orange').is(':hidden') || 
           $('.panel.turquese').is(':hidden')){
            if ($('#landing').is(':hidden')) {
                $("#landing").toggle();
                $("#bottom-image").fadeToggle();
            }
        }
    });
    
    $(".menu_button.btn1").click(function(){
        $(".panel.green").slideToggle();
        $(".panel.turquese").slideUp();
        $(".panel.red").slideUp();
        $(".panel.orange").slideUp();
    });
    
    $(".menu_button.btn2").click(function(){
        $(".panel.turquese").slideToggle();
        $(".panel.green").slideUp();
        $(".panel.red").slideUp();
        $(".panel.orange").slideUp();
    });
    
    $(".menu_button.btn3").click(function(){
        $(".panel.red").slideToggle();
        $(".panel.green").slideUp();
        $(".panel.turquese").slideUp();
        $(".panel.orange").slideUp();
    });
    
});