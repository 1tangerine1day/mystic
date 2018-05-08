/*
Theme: RENO
Author: CSSLoss.com
Author URI: http://www.cssloss.com/
Version: 1.0
=============================================
*/

(function ($) {
    "use strict";

    /**
     * Window Load
     */
    

    /**
     * Document Ready
     */
    $(document).ready(function() {

        /** Typed.js (Text typing effect) */
        $(".typed").typed({
            stringsElement: $(".typed-strings"),
            loop: true,
            backDelay: 2000
        });


        /** Navigation */
        $(".nav-toggle, .resume-close").on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('menu-open');
            /**add menu ani**/
            $('.wave').toggleClass('open');
        });


        /** Custom Scrollbar */
        $(".section-resume").mCustomScrollbar({
            theme: 'minimal-dark',
            axis: 'y'
        });
        
        
        
        // magnific popup for portfolio
        $(".popup-image").magnificPopup({
            type: 'image',
        });

        $(".popup-video").magnificPopup({
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '</div>',

                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }
                },

                srcAction: 'iframe_src',
            }
        });


    });

})(jQuery);