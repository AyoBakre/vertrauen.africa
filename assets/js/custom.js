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

})(jQuery);

