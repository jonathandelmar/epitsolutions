(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll, #page-navigation a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1500, 'easeOutExpo');
        event.preventDefault();
    });

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
