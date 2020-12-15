/*global $*/
//nicescroll

$(document).ready(function () {
    'use strict';
    $('.carousel').carousel({interval: 4000});
});

//show color option div when clicking on the gear 

$(".gear-check").click(function () {
    'use strict';
    $(".color-option").fadeToggle();
    
});

//change theme color on click 

var colorLi = $(".color-option ul li");

colorLi
    .eq(0).css("backgroundColor", "crimson").end()
    .eq(1).css("backgroundColor", "#3f42dc").end()
    .eq(2).css("backgroundColor", "#14b74f").end()
    .eq(3).css("backgroundColor", "#3de0d2").end()
    .eq(4).css("backgroundColor", "#a8b316");

colorLi.click(function () {
    'use strict';
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
});

//Show and hide scroll to top button

var scrollBottom = $("#scroll-top");

$(window).scroll(function () {
    'use strict';
    if ($(this).scrollTop() >= 700) {
        scrollBottom.show();
    } else {
        scrollBottom.hide();
    }
});


//scroll to top when clicking
    
scrollBottom.click(function () {
    'use strict';
    $("html,body").animate({scrollTop: 0}, 800);
        
});

scrollBottom.click(function () {
    'use strict';
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= 200) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
        
});





