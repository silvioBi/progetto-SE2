var visible = [false,false,false,false];

$(document).ready(function(){
    
    $(".menu_button.btn0").click(function(){
        $(".panel.orange").slideToggle("medium");
        visible[0]=!visible[0];
        if (visible[0]) {
            for (i=1;i<visible.length;i++) {
                visible[i]=false;
            }
        }
        $(".panel.green").fadeOut("fast");
        $(".panel.red").fadeOut("fast");
        $(".panel.turquese").fadeOut("fast");
        hide_show_welcome_message()
    });
    
    $(".menu_button.btn1").click(function(){
        $(".panel.green").slideToggle("medium");
        visible[1]=!visible[1];
        if (visible[1]) {
            for (i=0;i<visible.length && i!=1;i++) {
                visible[i]=false;
            }
        }
        $(".panel.turquese").fadeOut("fast");
        $(".panel.red").fadeOut("fast");
        $(".panel.orange").fadeOut("fast");
        hide_show_welcome_message()
    });
    
    $(".menu_button.btn2").click(function(){
        $(".panel.turquese").slideToggle("medium");
        visible[2]=!visible[2];
        if (visible[2]) {
            for (i=0;i<visible.length && i!=2;i++) {
                visible[i]=false;
            }
        }
        $(".panel.green").fadeOut("fast");
        $(".panel.red").fadeOut("fast");
        $(".panel.orange").fadeOut("fast");
        hide_show_welcome_message()
    });
    
    $(".menu_button.btn3").click(function(){
        $(".panel.red").slideToggle("medium");
        visible[3]=!visible[3];
        if (visible[3]) {
            for (i=0;i<visible.length && i!=3;i++) {
                visible[i]=false;
            }
        }
        $(".panel.green").fadeOut("fast");
        $(".panel.turquese").fadeOut("fast");
        $(".panel.orange").fadeOut("fast");
        hide_show_welcome_message()
    });
    
});

function hide_show_welcome_message() {
    var show = true;
    for (i=0;i<visible.length;i++) {
        if (visible[i]) {
            show = !show;
        }
    }
    if (show) {
        $("#landing").fadeIn();
        $("#bottom-image").fadeIn();
    } else {
        $("#landing").fadeOut();
        $("#bottom-image").fadeOut();
    }
    
    /*
    console.log($('.panel.orange').is(':visible'));
  if ($('.panel.green').is(':hidden') &&
      $('.panel.red').is(':hidden') && 
      $('.panel.orange').is(':hidden') && 
      $('.panel.turquese').is(':hidden')) {
        $("#landing").fadeIn();
        $("#bottom-image").fadeIn();
  } else {
        $("#landing").fadeOut();
        $("#bottom-image").fadeOut();
  }  */
}