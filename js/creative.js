(function($) {
    "use strict"; // Start of use strict
    
    $(window).resize(function() {
        var pageRatio = 1.6; // 8/5 or 1280 / 800
        var width = pageRatio * $(window).height();
        $('#page-container, #mainNav').width(width);
    }).resize();
    
    var offsetHeight = $('#mainNav').height();
    
    $('#page-container > section, #page-container > header').height($('body').height() - offsetHeight);
    $('#page-container > header').css('margin-top', offsetHeight + 'px');

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll, #page-navigation a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - offsetHeight)
        }, 1500, 'easeOutExpo');
        event.preventDefault();
    });
    
    // custom js styling
    var offsetHeightForBg = (135*parseInt($('#about .container-bg').css('background-size')))/100 - $('#about .section-heading').outerHeight();
    $('#about .container-bg').css('background-position-y', '-'+offsetHeightForBg+'px');

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.container .content', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('#values .section-heading, #our-offers .section-heading, #contact .section-heading', {
        duration: 300,
        delay: 200
    });

})(jQuery); // End of use strict
