/*
Author       : Hash Theme.
Template Name: Brome - Responsive Html5 Digital Agency Template
Version      : 1.0
*/
/*=============================================
Table Of Contents
================================================

01. PRELOADER JS
02. MENU JS
03. SECTIONS BACKGROUNDS
04. HOME SLIDER JS
04.1. HOME SLIDER 2 JS
05. SERVICE SLIDER JS
06. TESTIMONIAL SLIDER JS
07. TEAM SLIDER JS
08. CLIENT SLIDER JS
08.1. BLOG IMAGE SLIDER JS
09. VENOBOX JS
10. START COUNTDOWN JS
11. ACCORDION JS
12. GOOGLE MAP
13. MIXITUP JS
14. MAILCHIMP JS
15. WOW ANIMATION JS


Table Of Contents end
================================================
*/
(function($) {
        'use strict';
        jQuery(document).on('ready', function() {
			
            /* 01. PRELOADER JS */
            $(window).on('load', function() {
                function fadeOut(el) {
                    el.style.opacity = 0.4;
                    var last;
                    var tick = function() {
                        el.style.opacity = +el.style.opacity - (new Date() - last) / 600;
                        last = +new Date();
                        if (+el.style.opacity > 0) {
                            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 100);
                        } else {
                            el.style.display = "none";
                        }
                    };
                    tick();
                }
                var pagePreloaderId = document.getElementById("page-preloader");
                setTimeout(function() {
                    fadeOut(pagePreloaderId)
                }, 1000);
            });
			
			
            /* 02. MENU JS */
            $(window).on('scroll', function() {
                if ($("#mainNav").offset().top > 80) {
                    $("#mainNav").addClass("navbar-shrink");
                } else {
                    $("#mainNav").removeClass("navbar-shrink");
                }
            });
			
            $('a.js-scroll-trigger').on('click', function(e) {
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top - 48
                }, 1000);
                e.preventDefault();
            });
			
            // Closes responsive menu when a scroll trigger link is clicked
            $('.js-scroll-trigger').on('click', function(e) {
                $('.navbar-collapse').collapse('hide');
            });
    
    
			
            /* 03. SECTIONS BACKGROUNDS */
            var pageSection = $("section,div");
            pageSection.each(function(indx) {
                if ($(this).attr("data-background")) {
                    $(this).css("background-image", "url(" + $(this).data("background") + ")");
                }
            });
			
			
            /* 04. HOME SLIDER JS */
            $('.home-slider').owlCarousel({
                loop: true,
                autoplay: false,
                autoplayTimeout: 4000,
                navSpeed: 700,
                dotsSpeed: 700,
                dragEndSpeed: 1000,
                dots: true,
                items: 1,
                nav: true,
                navText: ["<i class='icofont icofont-simple-left'></i>", "<i class='icofont icofont-simple-right'></i>"],
				responsiveClass:true,
				responsive:{
					0:{
						items:1,
						nav:false
					},
					600:{
						items:1,
						nav:false
					},
					768:{
						items:1,
						nav:true
					},
					1000:{
						items:1,
						nav:true
					}
				}
            });		

			
            /* 04.1. HOME SLIDER 2 JS */
            $('.home-slider-2').owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 3500,
                autoplaySpeed: 700,
                navSpeed: 700,
                dotsSpeed: 700,
                dragEndSpeed: 1000,
                dots: false,
                items: 1,
                nav: true,
                navText: ["<i class='icofont icofont-simple-left'></i>", "<i class='icofont icofont-simple-right'></i>"],
				responsiveClass:true,
				responsive:{
					0:{
						items:1,
						nav:false
					},
					600:{
						items:1,
						nav:false
					},
					768:{
						items:1,
						nav:true
					},
					1000:{
						items:1,
						nav:true
					}
				}
            });	

			
            /* 05. SERVICE SLIDER JS */
            $('.services-slider').owlCarousel({
                loop: true,
                autoplay: false,
                autoplayTimeout: 4000,
                navSpeed: 1000,
                dotsSpeed: 1000,
                dragEndSpeed: 1000,
                dots: true,
                items: 1,
                nav: true,
                navText: ["<i class='icofont icofont-simple-left'></i>", "<i class='icofont icofont-simple-right'></i>"]
            });
			
			
            /* 06. TESTIMONIAL SLIDER JS */
            $('.testimonial-slider').owlCarousel({
                loop: true,
                autoplay: false,
                autoplayTimeout: 4000,
                navSpeed: 1000,
                dotsSpeed: 1000,
                dragEndSpeed: 1000,
                margin: 30,
                dots: true,
                nav: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });
			
			
            /* 07. TEAM SLIDER JS */
            $('.team-slider').owlCarousel({
                loop: true,
                autoplay: false,
                autoplayTimeout: 4000,
                navSpeed: 1000,
                dotsSpeed: 1000,
                dragEndSpeed: 1000,
                margin: 0,
                animation: "fadeinLeft",
                dots: false,
                nav: true,
                navText: ["<i class='icofont icofont-long-arrow-left'></i>", "<i class='icofont icofont-long-arrow-right'></i>"],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 2
                    }
                }
            });
			
			
            /* 08. CLIENT SLIDER JS */
            $('.client-slider').owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 3500,
                navSpeed: 1000,
                dotsSpeed: 1000,
                dragEndSpeed: 1000,
                autoplaySpeed: 1000,
                margin: 30,
                dots: true,
                nav: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 2
                    }
                }
            });
			
            /* 08.1. BLOG IMAGE SLIDER JS */
            $('.blog-image-slider').owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 3500,
                navSpeed: 1000,
                dotsSpeed: 1000,
                dragEndSpeed: 1000,
                autoplaySpeed: 1000,
                dots: true,
                nav: false,
                items: 1
            });
			
			
            /* 09. VENOBOX JS */
            $('.venobox').venobox({
                numeratio: true,
                titleattr: 'data-title',
                titlePosition: 'top',
                spinner: 'wandering-cubes',
                spinColor: '#007bff'
            });
			
			
            /* 10. START COUNTDOWN JS */
            $('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
                if (visible) {
                    $(this).find('.timer').each(function() {
                        var $this = $(this);
                        $({
                            Counter: 0
                        }).animate({
                            Counter: $this.text()
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    });
                    $(this).unbind('inview');
                }
            });
			
			
            /* 11. ACCORDION JS */
            $(".accordion-box").on('click', '.acc-btn', function() {
                var outerBox = $(this).parents('.accordion-box');
                var target = $(this).parents('.accordion');
                if ($(this).hasClass('active') !== true) {
                    $('.accordion .acc-btn').removeClass('active');
                }
                if ($(this).next('.acc-content').is(':visible')) {
                    return false;
                } else {
                    $(this).addClass('active');
                    $(outerBox).children('.accordion').removeClass('active-block');
                    $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                    target.addClass('active-block');
                    $(this).next('.acc-content').slideDown(300);
                }
            });
			

			
        });
		
		
        /* 13. MIXITUP JS */
        $('.portfolio-items').mixItUp({
            load: {
                sort: 'order:asc' /* default:asc */
            },
            animation: {
                effects: 'fade rotateX(180deg)',
                /* fade scale */
                duration: 700 /* 600 */
            },
            selectors: {
                filter: '.filter' /* .filter */
            },
            callbacks: {
                onMixEnd: function(state) {
                    console.log(state) /* null */
                }
            }
        });
		
		
        /* 14. MAILCHIMP JS */
        if ($('.mailchimp').length > 0) {
            /*  MAILCHIMP  */
            $('.mailchimp').ajaxChimp({
                language: 'es',
                callback: mailchimpCallback,
                url: "https://hashtheme.us12.list-manage.com/subscribe/post?u=37a62f2c85299c0756f6b492d&amp;id=edbe78d130" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
            });
        }

        function mailchimpCallback(resp) {
            if (resp.result === 'success') {
                $('.subscription-success').html('<i class="fa fa-check"></i>' + resp.msg).fadeIn(1000);
                $('.subscription-error').fadeOut(500);
            } else if (resp.result === 'error') {
                $('.subscription-error').html('<i class="fa fa-times"></i>' + resp.msg).fadeIn(1000);
            }
        }
        $.ajaxChimp.translations.es = {
            'submit': 'Submitting...',
            0: 'We have sent you a confirmation email',
            1: 'Please enter a value',
            2: 'An email address must contain a single @',
            3: 'The domain portion of the email address is invalid (the portion after the @: )',
            4: 'The username portion of the email address is invalid (the portion before the @: )',
            5: 'This email address looks fake or invalid. Please enter a real email address'
        };
		
		
        /* 15. WOW ANIMATION JS */
        new WOW().init();
    }

)(jQuery);