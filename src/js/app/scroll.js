(function() {

		'use strict';

		function activeStickyKit() {
				$('[data-sticky_column]').stick_in_parent({
						parent: '[data-sticky_parent]'
				});

				// bootstrap col position
				$('[data-sticky_column]')
				.on('sticky_kit:bottom', function(e) {
						$(this).parent().css('position', 'static');
				})
				.on('sticky_kit:unbottom', function(e) {
						$(this).parent().css('position', 'relative');
				});
		};
		activeStickyKit();

		function detachStickyKit() {
				$('[data-sticky_column]').trigger("sticky_kit:detach");
		};

		//  stop sticky kit
		//  based on your window width

		var screen = 992;

		var windowHeight, windowWidth;
		windowWidth = $(window).width();
		if ((windowWidth < screen)) {
				detachStickyKit();
		} else {
				activeStickyKit();
		}

		// windowSize
		// window resize
		function windowSize() {
				windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
				windowWidth = window.innerWidth ? window.innerWidth : $(window).width();

		}
		windowSize();

		// Returns a function, that, as long as it continues to be invoked, will not
		// be triggered. The function will be called after it stops being called for
		// N milliseconds. If `immediate` is passed, trigger the function on the
		// leading edge, instead of the trailing.
		function debounce(func, wait, immediate) {
				var timeout;
				return function() {
						var context = this, args = arguments;
						var later = function() {
								timeout = null;
								if (!immediate) func.apply(context, args);
						};
						var callNow = immediate && !timeout;
						clearTimeout(timeout);
						timeout = setTimeout(later, wait);
						if (callNow) func.apply(context, args);
				};
		};

		$(window).resize(debounce(function(){
				windowSize();
				$(document.body).trigger("sticky_kit:recalc");
				if (windowWidth < screen) {
						detachStickyKit();
				} else {
						activeStickyKit();
				}
		}, 250));


		/*********************************************
			HEIGHT SECTION
		*********************************************/
		function resizeFullHeight(e) {
			$(e).each(function() {
				$(this).height($(window).height());
			});
		}
		function resizeAutoHeight(e) {
			$(e).each(function() {
				$(this).height("auto");
			});
		}
		resizeHeight(".inner_fullHeight");

		$(window).scroll(function() {
			resizeHeight(".inner_fullHeight");
		});

		$(window).resize(function() {
			resizeHeight(".inner_fullHeight");
		});

		function resizeHeight(e) {
			if (($(window).width() < screen)) {
					resizeAutoHeight(e)
			} else {
					resizeFullHeight(e)
			}
		}

		/*********************************************
			BACKGROUND ANIM
		*********************************************/
		function bgColor(section) {
			$(section).each(function(){
				var bottomSection = $(this).height() + $(this).offset().top;

				if($(window).scrollTop() > $(this).offset().top - ($(window).height()/4) && $(window).scrollTop() < bottomSection) {
					$("body").removeClass();
					$("body").addClass($(this).attr("id"));
				}
			});
		}
		bgColor(".sectionZone");

		$(window).scroll(function() {
			bgColor(".sectionZone");
		});


		/*********************************************
			CAROUSEL
		*********************************************/
		$(".owl-carousel").owlCarousel({
			items: 2,
			nav: true,
			center:true,
			loop:true,
			navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
	    responsiveClass:true,
	    responsive:{
	        0:{
	          items:1,
	        },
	        600:{
	          items:3,
	        },
	        1000:{
	          items:2,
	        },
	        1100:{
	        	items:2,
	        	loop:true,	        	
	        },
	        1900: {
	        	items:4,
	        	loop:true,
	        }
	    }
		});



})(window.jQuery);
