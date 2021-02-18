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

		/*~-~-~- Bottom to Top ~-~-~- */

		$('body').append('<div id="scrollup"><i class="fa fa-angle-up"></i></div>');


		$(window).on("scroll", function () {
			if ($(this).scrollTop() > 50) {
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


		/* -~-~-  Mobile Menu hiddin on click ~-~-~- */  
		$("ul.nav.navbar-nav li a").click(function () {
			$(".navbar-collapse").removeClass("in");
		})
	});

	$(".downloadLink").click(
		function (e) {
			e.preventDefault();

			//open download link in new page
			window.open($(this).attr("href"));

			//redirect current page to success page
			window.location = "https://ayobakre.github.io/vertrauen.africa/download.html";
			window.focus();
		}
	);

	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			var pageURL = $(location).attr("href");

			if (pageURL=='https://ayobakre.github.io/vertrauen.africa/index.html' || 'https://ayobakre.github.io/vertrauen.africa/' ){
				window.location = "https://ayobakre.github.io/vertrauen.africa/careers.html";
				window.focus();
			}

			else if (pageURL == 'https://ayobakre.github.io/vertrauen.africa/careers.html') {
				window.location = "https://ayobakre.github.io/vertrauen.africa/reports.html";
				window.focus();
			}

			else if (pageURL == 'https://ayobakre.github.io/vertrauen.africa/reports.html') {
				window.location = "https://ayobakre.github.io/vertrauen.africa/index.html";
				window.focus();
			}
			
			else{

			}
			
		}

	
});

})(jQuery);

