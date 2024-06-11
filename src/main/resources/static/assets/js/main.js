/*---------------------------------------------
Template name :  Bizidea
Version       :  1.0
Author        :  ThemeLooks
Author url    :  http://themelooks.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

    01: Main Menu
    02: Sticky Nav
    03: Offcanvas
    04: Background Image
    05: Check Data
    06: Owl Carousel
    07: Counter Up
    08: Video Popup
    09: Changing svg color
    10: Google map
    11: Preloader
    12: Isotope
    13: Contact Form
    14: Back to top button
    15: Countdown
----------------------------------------------*/


(function ($) {
    "use strict";

    /*===================
    01: Main Menu
    =====================*/
    $('.header-menu a[href="#"]').on('click', function (event) {
        event.preventDefault();
    });

    /* Menu Maker */
    $(".main-menu").menumaker({
        title: '<span></span>',
        format: "multitoggle"
    });

    $($(window)).on('scroll', function () {
        if (!$('ul.nav').hasClass('open')) {
            $('#menu-button').removeClass('menu-opened');
        };
    });

    /*========================
    02: Sticky Nav
    ==========================*/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-main.style--one").removeClass("sticky fadeInDown animated");
        }
        else {
            $(".header-main.style--one").addClass("sticky fadeInDown animated");
        }
    });

    /*========================
    03: Offcanvas
    ==========================*/
   

    /*========================
    04: Background Image
    ==========================*/
    var $bgImg = $('[data-bg-img]');
    $bgImg.css('background-image', function () {
        return 'url("' + $(this).data('bg-img') + '")';
    }).removeAttr('data-bg-img').addClass('bg-img');

    /*==================================
    05: Check Data
    ====================================*/
    var checkData = function (data, value) {
        return typeof data === 'undefined' ? value : data;
    };

    /*==================================
    06: Owl Carousel
    ====================================*/
    var $owlCarousel = $('.owl-carousel');
    $owlCarousel.each(function () {
        var $t = $(this);

        $t.owlCarousel({
            items: checkData($t.data('owl-items'), 1),
            margin: checkData($t.data('owl-margin'), 0),
            loop: checkData($t.data('owl-loop'), true),
            smartSpeed: 450,
            autoplay: checkData($t.data('owl-autoplay'), true),
            autoplayTimeout: checkData($t.data('owl-speed'), 8000),
            center: checkData($t.data('owl-center'), false),
            animateIn: checkData($t.data('owl-animate-in'), false),
            animateOut: checkData($t.data('owl-animate-out'), false),
            nav: checkData($t.data('owl-nav'), false),
            navText: ['<img src="assets/img/icons/angle-left.svg" class="svg">', '<img src="assets/img/icons/angle-right.svg" class="svg">'],
            dots: checkData($t.data('owl-dots'), false),
            responsive: checkData($t.data('owl-responsive'), {})
        });
    });

    /*==================================
    07: Counter Up
    ====================================*/
    $(".count span").counterUp({
        delay: 30,
        time: 2000
    });

    /*========================
    08: Video Popup
    ==========================*/
    var $popUpVideo = $('.popup-video');
    if ($popUpVideo.length) {
        $popUpVideo.magnificPopup({
            type: 'iframe'
        });
    };

    /*==================================
    09: Changing svg color 
    ====================================*/
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });

    /*==================================
    10: Google map 
    ====================================*/
    var $map = $('[data-trigger="map"]'),
        $mapOps;

    if ($map.length) {
        // Map Options
        $mapOps = $map.data('map-options');

        // Map Initialization
        window.initMap = function () {
            $map.css('min-height', '600px');
            $map.each(function () {
                var $t = $(this), map, lat, lng, zoom;

                $mapOps = $t.data('map-options');
                lat = parseFloat($mapOps.latitude, 10);
                lng = parseFloat($mapOps.longitude, 10);
                zoom = parseFloat($mapOps.zoom, 10);

                map = new google.maps.Map($t[0], {
                    center: { lat: lat, lng: lng },
                    zoom: zoom,
                    scrollwheel: false,
                    disableDefaultUI: true,
                    zoomControl: true,
                    styles: 
                        [
                            {
                                "featureType": "all",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "saturation": 36
                                    },
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 40
                                    }
                                ]
                            },
                            {
                                "featureType": "all",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 16
                                    }
                                ]
                            },
                            {
                                "featureType": "all",
                                "elementType": "labels.icon",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 20
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 17
                                    },
                                    {
                                        "weight": 1.2
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 20
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 21
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 17
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 29
                                    },
                                    {
                                        "weight": 0.2
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 18
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 16
                                    }
                                ]
                            },
                            {
                                "featureType": "transit",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 19
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 17
                                    }
                                ]
                            }
                        ]
                });

                map = new google.maps.Marker({
                    position: { lat: lat, lng: lng },
                    map: map,
                    animation: google.maps.Animation.DROP,
                    draggable: false,
                    icon: 'assets/img/map-marker.png'
                });

            });
        };
        initMap();
    };

    /*==================================
    11: Preloader 
    ====================================*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    });

    /*==================================
    12: Isotope
    ====================================*/
    $(window).on('load', function () {
        $('.project-items').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false
            },
            masonry: {
                columnWidth: '.grid-item'
            }
        });

        $('.project_filter li').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $('.grid').isotope({
                filter: filterValue
            });
        });
    });

    /*==================================
    13: Contact Form
    ====================================*/
    $('.contact-form-wrapper').on('submit', 'form', function (e) {
        e.preventDefault();

        var $el = $(this);

        $.post($el.attr('action'), $el.serialize(), function (res) {
            res = $.parseJSON(res);
            $el.parent('.contact-form-wrapper').find('.form-response').html('<span>' + res[1] + '</span>');
        });
    });

    /*============================================
    14: Back to top button
    ==============================================*/
    var $backToTopBtn = $('.back-to-top');

    if ($backToTopBtn.length) {
        var scrollTrigger = 400, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $backToTopBtn.addClass('show');
                } else {
                    $backToTopBtn.removeClass('show');
                }
            };

        backToTop();

        $(window).on('scroll', function () {
            backToTop();
        });

        $backToTopBtn.on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    /*==================================
    15: Countdown
    ====================================*/
    $('#countdown').countdown({
        date: '08/16/2020 23:59:59'
    });

}(jQuery));