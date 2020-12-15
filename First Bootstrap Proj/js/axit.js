/*global $*/
$(function () {
    'use strict';
    
    $('.tab-switch li').click(function () {
    
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab-section .tab-content > div').hide();
        $($(this).data('class')).show();

    });
    
//Fire NiceScroll And Some Options
    
    $("html").niceScroll({
        cursorcolor : "#FF9B51",
        cursorwidth : "7px",
        cursorborder : "1px solid #FF9B51",
        cursorborderradius : "5px",
        cursorspeed : "75",
        zindex : "1031"
    });
    
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= 200) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
              
});

