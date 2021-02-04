/*--
* Template Name: Palki
* Template URL: http://themehappy.com/html/palki
* Author: themehappy
* Author URI: http://themehappy.com
* Version: 1.0
* Description: Palki - Responsive Bootstrap 3  Page Template
--*/

(function ($) {
	'use strict';

	jQuery(document).ready(function ($) {

		//*~-~-~- Preloader Js ~-~-~- */
		$(window).on("load", function () {
			$('.spinner').fadeOut();
			$('.preloader-area').delay(350).fadeOut('slow');
		});

		/*~-~-~- Sticky Menu ~-~-~- */

		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 120) {
				$('.navbar-fixed-top').addClass('sticky');
			} else {
				$('.navbar-fixed-top').removeClass('sticky');
			}
		});

		/*~-~-~- Video ~-~-~- */
		$('.video-icon').magnificPopup({
			type: 'video'
		});

		$('.portfolio-img').magnificPopup({
			type: 'image'
			// other options
		});

		/*~-~-~- Wow ~-~-~- */

		var wow = new WOW({
			mobile: false
		});
		wow.init();

		/*~-~-~- testimonial Carousel ~-~-~- */

		$(".testimonial-item").owlCarousel({
			items: 2,
			dots: true,
			autoplay: true,
			loop: true,
			mouseDrag: true,
			touchDrag: true,
			autoPlay: true,
			navigation: false,
			margin: 30,

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

		/*~-~-~- special Carousel ~-~-~- */

		$(".special-item").owlCarousel({
			items: 3,
			loop: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			responsiveClass: true,
			nav: true,
			autoplayTimeout: 5000,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			autoplay: false,
			margin: 30,

			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3

				}
			}
		});

		/*~-~-~- Slider Area ~-~-~- */

		$('.slider-active').owlCarousel({
			loop: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			responsiveClass: true,
			nav: true,
			autoplayTimeout: 5000,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			autoplay: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});


		/*~-~-~- Parallac Js ~-~-~- */

		$(window).stellar({
			responsive: true,
			positionProperty: 'position',
			horizontalScrolling: false
		});

		/*~-~-~- Smoth Scrool Js ~-~-~- */

		$('a.smoth-scroll').on("click", function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
		});

		/*~-~-~- Bottom to Top ~-~-~- */

		$('body').append('<div id="scrollup"><i class="fa fa-angle-up"></i></div>');


		$(window).on("scroll", function () {
			if ($(this).scrollTop() > 250) {
				$('#scrollup').fadeIn();
			} else {
				$('#scrollup').fadeOut();
			}
		});
		$('#scrollup').on("click", function () {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});

		/*~-~-~- Skill ~-~-~- */

		$('.skillsection').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$('.chart').easyPieChart({
					//your configuration goes here
					easing: 'easeOut',
					delay: 3000,
					barColor: '#3498DB',
					trackColor: 'rgba(255,255,255,0.2)',
					scaleColor: false,
					lineWidth: 8,
					size: 140,
					animate: 2000,
					onStep: function (from, to, percent) {
						this.el.children[0].innerHTML = Math.round(percent);
					}

				});
				$(this).unbind('inview');
			}
		});

		/* -~-~- Portfolio mixitup Js ~-~-~- */

		$('.portfolio-inner').mixItUp();

		/* -~-~- Counter Up Js ~-~-~- */

		$('.counter').counterUp();

		/* -~-~-  Mobile Menu hiddin on click ~-~-~- */  
		$("ul.nav.navbar-nav li a").click(function () {
			$(".navbar-collapse").removeClass("in");
		})
	});

})(jQuery);