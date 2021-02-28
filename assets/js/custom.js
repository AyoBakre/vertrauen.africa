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

	/*$(window).on("scroll", function() {
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) */ 
	$(window).on('scroll', function() { 

        if ($(window).scrollTop() >= $('#footer').offset().top + $('#footer').outerHeight() - window.innerHeight) {
			
			var pageURL = $(location).attr("href");

			if (pageURL=='https://ayobakre.github.io/vertrauen.africa/index.html'){

				const nextTitle = 'vertrauen - careers';
				const nextURL = 'https://ayobakre.github.io/vertrauen.africa/careers.html';
				const nextState = { additionalInformation: 'vertrauen careers' };
				window.history.pushState(nextState, nextTitle, nextURL);
				// This will create a new entry in the browser's history, without reloading

				$('#first').css('display', 'none');
				$('#second').css('display', 'inline-block');
				$('#third').css('display', 'none');
				$("html, body").animate({
					scrollTop: 0
					}, 800);
				$('#first-li').removeClass('active');
				$('#second-li').addClass('active');
				$('#third-li').removeClass('active');
			}

			else if (pageURL=='https://ayobakre.github.io/vertrauen.africa/'){

				const nextTitle = 'vertrauen - careers';
				const nextURL = 'https://ayobakre.github.io/vertrauen.africa/careers.html';
				const nextState = { additionalInformation: 'vertrauen careers' };
				window.history.pushState(nextState, nextTitle, nextURL);
				// This will create a new entry in the browser's history, without reloading

				$('#first').css('display', 'none');
				$('#second').css('display', 'inline-block');
				$('#third').css('display', 'none');
				$("html, body").animate({
					scrollTop: 0
					}, 800);
				$('#first-li').removeClass('active');
				$('#second-li').addClass('active');
				$('#third-li').removeClass('active');
			}

			else if (pageURL=='https://ayobakre.github.io/vertrauen.africa/about.html'){

				const nextTitle = 'vertrauen - careers';
				const nextURL = 'https://ayobakre.github.io/vertrauen.africa/careers.html';
				const nextState = { additionalInformation: 'vertrauen careers' };
				window.history.pushState(nextState, nextTitle, nextURL);
				// This will create a new entry in the browser's history, without reloading

				$('#first').css('display', 'none');
				$('#second').css('display', 'inline-block');
				$('#third').css('display', 'none');
				$("html, body").animate({
					scrollTop: 0
					}, 800);
				$('#first-li').removeClass('active');
				$('#second-li').addClass('active');
				$('#third-li').removeClass('active');
			}

			else if (pageURL=='https://ayobakre.github.io/vertrauen.africa/careers.html'){

				const nextTitle = 'vertrauen - reports';
				const nextURL = 'https://ayobakre.github.io/vertrauen.africa/reports.html';
				const nextState = { additionalInformation: 'vertrauen reports' };
				window.history.pushState(nextState, nextTitle, nextURL);
				// This will create a new entry in the browser's history, without reloading

				$('#first').css('display', 'none');
				$('#second').css('display', 'none');
				$('#third').css('display', 'inline-block');
				$("html, body").animate({
					scrollTop: 0
					}, 800);
				$('#first-li').removeClass('active');
				$('#second-li').removeClass('active');
				$('#third-li').addClass('active');
			}

			else if (pageURL=='https://ayobakre.github.io/vertrauen.africa/reports.html'){

				const nextTitle = 'vertrauen - about';
				const nextURL = 'https://ayobakre.github.io/vertrauen.africa/about.html';
				const nextState = { additionalInformation: 'vertrauen about' };
				window.history.pushState(nextState, nextTitle, nextURL);
				// This will create a new entry in the browser's history, without reloading

				$('#first').css('display', 'inline-block');
				$('#second').css('display', 'none');
				$('#third').css('display', 'none');
				$("html, body").animate({
					scrollTop: 0
					}, 800);
				$('#first-li').addClass('active');
				$('#second-li').removeClass('active');
				$('#third-li').removeClass('active');
			}
			else{

			}

		};
		
	});
	
	$('#first-li').click(function(e) {
			
			const nextTitle = 'vertrauen - about';
				const nextURL = 'https://ayobakre.github.io/vertrauen.africa/about.html';
				const nextState = { additionalInformation: 'vertrauen about' };
				window.history.pushState(nextState, nextTitle, nextURL);
				// This will create a new entry in the browser's history, without reloading

				
				$('#second').css('display', 'none');
				$('#third').css('display', 'none');
				 
				$('#first').css('display', 'inline-block').addClass('ani');
				$("html, body").animate({
					scrollTop: 0
					}, 800);
				
				$('#second').removeClass('ani');
				$('#third').removeClass('ani');

				$('#first-li').addClass('active');
				$('#second-li').removeClass('active');
				$('#third-li').removeClass('active');

				$(".navbar-collapse").removeClass("in");
					
			
			// For all modern browsers, prevent default behavior of the click
			e.preventDefault();
			
			// Just to be sure, older IE's needs this
			return false; 
	});
	

	$('#second-li').click(function(e) {
		const nextTitle = 'vertrauen - careers';
				const nextURL = 'https://ayobakre.github.io/vertrauen.africa/careers.html';
				const nextState = { additionalInformation: 'vertrauen careers' };
				window.history.pushState(nextState, nextTitle, nextURL);
				// This will create a new entry in the browser's history, without reloading

				$('#first').css('display', 'none');
				$('#third').css('display', 'none');
				$('#second').css('display', 'inline-block').addClass('ani');
				$("html, body").animate({
					scrollTop: 0
					}, 800);
				
				$('#first').removeClass('ani');
				$('#third').removeClass('ani');
				
				$('#first-li').removeClass('active');
				$('#second-li').addClass('active');
				$('#third-li').removeClass('active');
				$(".navbar-collapse").removeClass("in")
	
		// For all modern browsers, prevent default behavior of the click
		e.preventDefault();
	
		// Just to be sure, older IE's needs this
		return false; 
	});

	$('#third-li').click(function(e) {
		const nextTitle = 'vertrauen - reports';
				const nextURL = 'https://ayobakre.github.io/vertrauen.africa/reports.html';
				const nextState = { additionalInformation: 'vertrauen reports' };
				window.history.pushState(nextState, nextTitle, nextURL);
				// This will create a new entry in the browser's history, without reloading

				$('#first').css('display', 'none');
				$('#second').css('display', 'none');
				
				$('#third').css('display', 'inline-block').addClass('ani');
				$("html, body").animate({
					scrollTop: 0
					}, 800);
				
				$('#first').removeClass('ani');
				$('#second').removeClass('ani');
				
				$('#first-li').removeClass('active');
				$('#second-li').removeClass('active');
				$('#third-li').addClass('active');
				$(".navbar-collapse").removeClass("in")
	
		// For all modern browsers, prevent default behavior of the click
		e.preventDefault();
	
		// Just to be sure, older IE's needs this
		return false; 
	});

})(jQuery);

