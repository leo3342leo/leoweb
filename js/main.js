

$(window).on('load', function () {

	/* -----------------------------------
				1. Preloader
	----------------------------------- */
    $("#preloader").delay(1000).addClass('loaded');


	/* -----------------------------------
			2. Isotope Portfolio Setup
	----------------------------------- */
    if ($('.portfolio-items').length) {
        var $elements = $(".portfolio-items"),
            $filters = $('.portfolio-filter ul li');
        $elements.isotope();

        $filters.on('click', function () {
            $filters.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).data('filter');
            $(".portfolio-items").isotope({
                filter: selector,
                hiddenStyle: {
                    transform: 'scale(.2) skew(30deg)',
                    opacity: 0
                },
                visibleStyle: {
                    transform: 'scale(1) skew(0deg)',
                    opacity: 1,
                },
                transitionDuration: '.5s'
            });
        });
    }

	/* -----------------------------------
			3. Blogs Masonry Setup
	----------------------------------- */
    $('.blog-masonry').isotope({ layoutMode: 'moduloColumns' });

});

$(document).ready(function () {
    "use strict";

	/* -----------------------------------
			4. Active Current Link
	----------------------------------- */
    $('.header-main ul li a').on('click', function () {
        if ($('.header-main.on').length) {
            $('.header-main').removeClass('on');
        }
    });

	/* -----------------------------------
		5. Mobile Toggle Click Setup
	----------------------------------- */
    $('.header-toggle').on('click', function () {
        $('.header-main').toggleClass('on');
    });

	/* -----------------------------------
	      6. Testimonials OwlCarousel
	----------------------------------- */
    $(".testimonial .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });

	/* -----------------------------------
	      	7. Chart Setup
	----------------------------------- */
    if ($('.chart').length > 0) {
        $('.chart').easyPieChart({
            trackColor: '#0e0f10',
            scaleColor: false,
            easing: 'easeOutBounce',
            scaleLength: 4,
            lineCap: 'square',
            lineWidth: 5,
            size: 130,
            animate: {
                duration: 2500,
                enabled: true
            }
        });
    }

	/* -----------------------------------
	      	8. Portfolio Tilt Setup
	----------------------------------- */
    $('.pt-portfolio .portfolio-items .item figure').tilt({
        maxTilt: 3,
        glare: true,
        maxGlare: .6,
        reverse: true
    });

	/* -----------------------------------
	      9. Portfolio Image Link
	----------------------------------- */
    $(".portfolio-items .image-link").magnificPopup({
        type: "image",
        mainClass: 'mfp-fade',
        removalDelay: 300,
        image: {
            titleSrc: function (item) {
                return item.el.attr('title') + '<br />' + item.el.attr('data-title');
            }
        },
        gallery: {
            enabled: true
        }
    });

	/* -----------------------------------
	      10. Portfolio Video Link
	----------------------------------- */
    $(".portfolio-items .video-link").magnificPopup({
        type: "iframe"
    });


	/* -----------------------------------
	    11. Validate Contact Form
	----------------------------------- */
    if ($("#contact-form").length) {
        $("#contact-form").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },

                email: "required",

            },

            messages: {
                name: "Please enter your name",
                email: "Please enter your email address"
            },

            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "/mail.php",
                    data: $(form).serialize(),
                    success: function () {
                        $("#loader").hide();
                        $("#success").slideDown("slow");
                        setTimeout(function () {
                            $("#success").slideUp("slow");
                        }, 3000);
                        form.reset();
                    },
                    error: function () {
                        $("#loader").hide();
                        $("#error").slideDown("slow");
                        setTimeout(function () {
                            $("#error").slideUp("slow");
                        }, 3000);
                    }
                });
                return false;
            }

        });
    }


});
