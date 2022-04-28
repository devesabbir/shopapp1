/***************************************************
==================== JS INDEX ======================
****************************************************
 PreLoader Js
 Mobile Menu Js
 Sidebar Js
 Cart Toggle Js
 Search Js
 Sticky Header Js
 Data Background Js
 Testimonial Slider Js
 Slider Js (Home 3)
 Brand Js
 Tesimonial Js
 Course Slider Js
 Masonary Js
 Wow Js
 Data width Js
 Cart Quantity Js
 Show Login Toggle Js
 Show Coupon Toggle Js
 Create An Account Toggle Js
 Shipping Box Toggle Js
 Counter Js
 Parallax Js
 InHover Active Js

****************************************************/

(function ($) {
	("use strict");

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// PreLoader Js
	windowOn.on("load", function () {
		$("#loading").fadeOut(500);
	});

	////////////////////////////////////////////////////
	// Mobile Menu Js
	$("#mobile-menu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
	// Sidebar Js
	$(".sidebar-toggle-btn").on("click", function () {
		$(".sidebar__area").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".sidebar__close-btn").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// Cart Toggle Js
	$(".cart-toggle-btn").on("click", function () {
		$(".cartmini__wrapper").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".cartmini__close-btn").on("click", function () {
		$(".cartmini__wrapper").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});
	$(".body-overlay").on("click", function () {
		$(".cartmini__wrapper").removeClass("opened");
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".header__search-3").removeClass("search-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// Search Js
	$(".search-toggle").on("click", function () {
		$(".search__area").addClass("opened");
	});
	$(".search-close-btn").on("click", function () {
		$(".search__area").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// Sticky Header Js
	windowOn.on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("sticky");
		} else {
			$("#header-sticky").addClass("sticky");
		}
	});

	////////////////////////////////////////////////////
	// Data Background Js
	$("[data-background").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-background") + "  )"
		);
	});

	////////////////////////////////////////////////////
	// Nice Select Js
	$("select").niceSelect();

	////////////////////////////////////////////////////
	// slider__active Slider Js

	if (jQuery(".slider__active").length > 0) {
		let sliderActive1 = ".slider__active";
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: "fade",

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
			pagination: {
				el: ".slider-pagination",
				// dynamicBullets: true,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}

	if (jQuery(".slider__active-2").length > 0) {
		let sliderActive1 = ".slider__active-2";
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: "fade",

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
			pagination: {
				el: ".swiper-paginations",
				// dynamicBullets: true,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}

	var themeSlider = new Swiper(".classname", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// Masonary Js
	$(".grid").imagesLoaded(function () {
		// init Isotope
		var $grid = $(".grid").isotope({
			itemSelector: ".grid-item",
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: ".grid-item",
			},
		});

		// filter items on button click
		$(".masonary-menu").on("click", "button", function () {
			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$(".masonary-menu button").on("click", function (event) {
			$(this).siblings(".active").removeClass("active");
			$(this).addClass("active");
			event.preventDefault();
		});
	});

	

	/* magnificPopup img view */
	$(".image-popups").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
	// Data width Js
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	////////////////////////////////////////////////////
	// Cart Quantity Js
	$(".cart-minus").click(function () {
		var $input = $(this).parent().find("input");
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$(".cart-plus").click(function () {
		var $input = $(this).parent().find("input");
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	////////////////////////////////////////////////////
	// Show Login Toggle Js
	$("#showlogin").on("click", function () {
		$("#checkout-login").slideToggle(900);
	});

	////////////////////////////////////////////////////
	// Show Coupon Toggle Js
	$("#showcoupon").on("click", function () {
		$("#checkout_coupon").slideToggle(900);
	});

	////////////////////////////////////////////////////
	// Create An Account Toggle Js
	$("#cbox").on("click", function () {
		$("#cbox_info").slideToggle(900);
	});

	////////////////////////////////////////////////////
	// Shipping Box Toggle Js
	$("#ship-box").on("click", function () {
		$("#ship-box-info").slideToggle(1000);
	});

	////////////////////////////////////////////////////
	// Counter Js
	$(".counter").counterUp({
		delay: 10,
		time: 1000,
	});

	////////////////////////////////////////////////////
	// Parallax Js
	if ($(".scene").length > 0) {
		$(".scene").parallax({
			scalarX: 10.0,
			scalarY: 15.0,
		});
	}

	////////////////////////////////////////////////////
	// InHover Active Js
	$(".hover__active").on("mouseenter", function () {
		$(this)
			.addClass("active")
			.parent()
			.siblings()
			.find(".hover__active")
			.removeClass("active");
	});

	if (typeof $.fn.knob != "undefined") {
		$(".knob").each(function () {
			var $this = $(this),
				knobVal = $this.attr("data-rel");

			$this.knob({
				draw: function () {
					$(this.i).val(this.cv + "%");
				},
			});

			$this.appear(
				function () {
					$({
						value: 0,
					}).animate(
						{
							value: knobVal,
						},
						{
							duration: 2000,
							easing: "swing",
							step: function () {
								$this
									.val(Math.ceil(this.value))
									.trigger("change");
							},
						}
					);
				},
				{
					accX: 0,
					accY: -150,
				}
			);
		});
	}

	// testimonial-activation
	const testitmonial = new Swiper(".testimonial-active", {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		pagination: {
			el: ".testimonial-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial-button-next",
			prevEl: ".testimonial-button-prev",
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 1,
				spaceBetween: 40,
			},
		},
	});

	// related product activation
	const relproduct = new Swiper(".r-product-active", {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,

		autoplay: {
			delay: 3000,
			pauseOnMouseEnter:true,
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
			1400: {
				slidesPerView: 4,
			},
		},
	});

	// tab product activation
	const tabslider = new Swiper(".product-tab-slider", {
		// Default parameters
		slidesPerView: 1,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		loop: true,
		autoplay: {
			delay: 3000,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".product-tab-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".product-tab-slider-button-next",
			prevEl: ".product-tab-slider-button-prev",
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
			1400: {
				slidesPerView: 5,
			},
		},
	});

	// drop-btn
	$(".drop-btn").on("click", function () {
		$(this).siblings("").toggleClass("content-hidden");
		$(this).parent("").toggleClass("child-content-hidden");
	});

	//range slider activation

	$(".slider-range-bar").slider({
		range: true,

		min: 0,

		max: 500,

		values: [75, 300],

		slide: function (event, ui) {
			$(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		},
	});

	$(".category-click").click(function () {
		$(this).siblings(".category-items").slideToggle();
		$(this).toggleClass("items-open");
	});
	// side - info
	$(".side-info-close,.offcanvas-overlay").on("click", function () {
		$(".side-info").removeClass("info-open");
		$(".offcanvas-overlay").removeClass("overlay-open");
	});
	$(".side-toggle").on("click", function () {
		$(".side-info").addClass("info-open");
		$(".offcanvas-overlay").addClass("overlay-open");
	});
	// sidebar - cart
	$(".close-sidebar,.offcanvas-overlay").on("click", function () {
		$(".sidebar-cart").removeClass("cart-open");
		$(".offcanvas-overlay").removeClass("overlay-open");
	});
	$(".action-item-cart").on("click", function () {
		$(".sidebar-cart").addClass("cart-open");
		$(".offcanvas-overlay").addClass("overlay-open");
	});
	// sidebar-wishlist
	$(".close-sidebar,.offcanvas-overlay").on("click", function () {
		$(".sidebar-wishlist").removeClass("wishlist-open");
		$(".offcanvas-overlay").removeClass("overlay-open");
	});
	$(".action-item-wishlist").on("click", function () {
		$(".sidebar-wishlist").addClass("wishlist-open");
		$(".offcanvas-overlay").addClass("overlay-open");
	});

	// sidebar filter
	$(".close-sidebar,.offcanvas-overlay").on("click", function () {
		$(".sidebar-filter").removeClass("filter-open");
		$(".offcanvas-overlay").removeClass("overlay-open");
	});
	$(".action-item-filter").on("click", function () {
		$(".sidebar-filter").addClass("filter-open");
		$(".offcanvas-overlay").addClass("overlay-open");
	});

	// header note
	$(".note-close-btn").on("click", function () {
		$(".header-note").slideUp(300);
	});

	// Image swap on click
	$(".single-product .product-color-nav img").click(function () {
		parentClass = $(this).parent().closest(".single-product");
		ChldImg = parentClass.find(".product-image img");
		ImageSrcValue = $(this).attr("src");
		ChldImg.attr("src", $(this).attr("src").replace());
		$(this).parent().siblings(".active").removeClass("active");
		$(this).parent().addClass("active");
	});
	$(".product-nav .product-nav-prev").on("click", function () {
		ChldImg = $(this)
			.parent()
			.closest(".single-product")
			.find(".active")
			.prev()
			.find("img")
			.attr("src");
		// remove current active class
		beforeClass = $(this)
			.parent()
			.closest(".single-product")
			.find(".active")
			.prev()
			.addClass("active");
		activeClassCount = $(this)
			.parent()
			.closest(".single-product")
			.find(".active").length;
		if (activeClassCount > 1) {
			$(this)
				.parent()
				.closest(".single-product")
				.find(".active")
				.last()
				.removeClass("active");
		}
		replacedImg = $(this)
			.parent()
			.closest(".single-product")
			.find(".product-image img");
		replacedImg.attr("src", ChldImg);
	});
	$(".product-nav .product-nav-next").on("click", function () {
		ChldImg = $(this)
			.parent()
			.closest(".single-product")
			.find(".active")
			.next()
			.find("img")
			.attr("src");
		// remove current active class
		beforeClass = $(this)
			.parent()
			.closest(".single-product")
			.find(".active")
			.next()
			.addClass("active");
		activeClassCount = $(this)
			.parent()
			.closest(".single-product")
			.find(".active").length;
		if (activeClassCount > 1) {
			$(this)
				.parent()
				.closest(".single-product")
				.find(".active")
				.first()
				.removeClass("active");
		}
		replacedImg = $(this)
			.parent()
			.closest(".single-product")
			.find(".product-image img");
		replacedImg.attr("src", ChldImg);
	});
})(jQuery);