var visible = [false, false, false, false];
var panels = [".panel.orange", ".panel.green",".panel.turquese",".panel.red"];
var active = false;

$(document).ready(function () {
    $(".menu_button").click(function () {
        var icon = $(this).children('.menu_icon').attr('src');
        if (icon.indexOf("calendar") !== -1) {
            toggle_visibility(0);
        } else if (icon.indexOf("star") !== -1) {
            toggle_visibility(1);
        } else if (icon.indexOf("stethoscope") !== -1) {
            toggle_visibility(2);
        } else if (icon.indexOf("settings") !== -1) {
            toggle_visibility(3);
        }
        hide_show_welcome_message()
    });
});

function toggle_visibility(i) {
    $(panels[i]).slideToggle("medium");
    visible[i] = !(visible[i]);
    if (visible[i]) {
        if (i!=0) {
            visible[0] = false;
            $(panels[0]).fadeOut("fast");
        } if (i!=1) {
            visible[1] = false;
            $(panels[1]).fadeOut("fast");
        } if (i!=2) {
            visible[2] = false;
            $(panels[2]).fadeOut("fast");
        } if (i!=3) {
            visible[3] = false;
            $(panels[3]).fadeOut("fast");
        }
    }
}

function hide_show_welcome_message() {
    var show = true;
    for (i = 0; i < visible.length; i++) {
        if (visible[i]) {
            show = !show;
            break;
        }
    }
    if (show) {
        $("#landing").show();
        $("#bottom-image").fadeIn();
    } else {
        $("#landing").hide();
        $("#bottom-image").fadeOut();
    }
}

$('.day_button').click(function (e) {
    var menu;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://127.0.0.1:5000/menu", true );
    xmlHttp.send();
    xmlHttp.onloadend = function () 
    {
        var menu = xmlHttp.responseText;
        console.log(menu);
    };
    
    var day = $(this).text();
    if (day.indexOf("Mon") !== -1) {
        $("#card0").attr("src", "/images/pasta-pesto.jpg");
        $("#card0-title").text("Pasta with pesto");
        $("#card0-text").text("Amazing pasta with fresh pesto with basil and parmesan");
    }
    if (day.indexOf("Tue") !== -1) {
        $("#card0").attr("src", "/images/pasta-al-sugo.jpg");
        $("#card0-title").text("Pasta al sugo");
        $("#card0-text").text("Simple and plain pasta with sugo from datterini tomatoes");
    }
    //console.log(day);
    $('.day_button').not(this).removeClass('active');
    $(this).toggleClass('active');
    if ($(this).hasClass("active")) {
        active = true;
    } else {
        active = false;
    }
    if (!active) {
        $("#day_pick").show();
        $(".container").hide();
    } else {
        $("#day_pick").hide();
        $(".container").fadeIn();
    }
    e.preventDefault();
});

$('.container').on('click', function () {
    $(".card", this).toggleClass('flipped');
});