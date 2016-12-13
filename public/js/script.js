var visible = [false, false, false, false];
var panels = [".panel.orange", ".panel.green",".panel.turquese",".panel.red"];
var active = false;

$(document).ready(function () {
    
    $(".menu_button.btn0").click(function () {
        console.log($(this).text());
        toggle_visibility(0);
        hide_show_welcome_message()
    });

    $(".menu_button.btn1").click(function () {
        toggle_visibility(1);
        hide_show_welcome_message()
    });

    $(".menu_button.btn2").click(function () {
        toggle_visibility(2);
        hide_show_welcome_message()
    });

    $(".menu_button.btn3").click(function () {
        toggle_visibility(3);
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
    console.log(visible);
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

$('.menu_button.day').click(function (e) {
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
    $('.menu_button.day').not(this).removeClass('active');
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
