$(document).ready(function() {



// mobile menu animation
    $('.menu.mobile ul').hide();
    $('.burger-menu_btn').click(function() {
        $('.menu.mobile ul').slideToggle('slow');
    });
    $('.menu.mobile ul li a').click(function() {
        $('.menu.mobile ul').slideToggle('slow');
    });

// contact modal
    $('[href="#contact').click(function(e) {
        e.preventDefault();
        $('.dim').addClass('focus');
    });
    $('.contact_btn').click(function() {
        $('.dim').addClass('focus');
    });
    $('.close-modal button').click(function() {
        $('.dim').removeClass('focus');
    });

// accordions
    $('.topic-header').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).parent('.accordion').removeClass('pinned');
            $(this).next('.collapsable').addClass('collapse');
        }
        else {
            $(this).addClass('active'); 
            $(this).parent('.accordion').addClass('pinned');
            $(this).next('.collapsable').removeClass('collapse');
        }

    });
    $('.topic-footer button').click(function() {
        $('.collapsable').addClass('collapse'); 
        $('.accordion').removeClass('pinned');
        $('.topic-header').removeClass('active'); 
    });

// disable image title on hover
    $(document).ready(function($) {
        $("img").mouseenter(function() {
            let $lwp_title = $(this).attr("title");
            $(this).attr("lwp_title", $lwp_title);
            $(this).attr("title", "");
        }).mouseleave(function() {
            let $lwp_title = $(this).attr("lwp_title");
            $(this).attr("title", $lwp_title);
            $(this).removeAttr("lwp_title");
        });
    });

// smooth scroll
    var headerHeight = $('.site-header').height();
    $('a[href*="#hero"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - headerHeight
                    }, 1200, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } 
                        else {
                            $target.attr('tabindex','-1');
                            $target.focus();
                        };
                    });
                }
            }
    });
    $('a[href*="#about-us"], a[href*="#gis"], a[href*="#lidar"], a[href*="#modeling"], a[href*="#bathymetry"], a[href*="#photogrammetry"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1200, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } 
                        else {
                            $target.attr('tabindex','-1');
                            $target.focus();
                        };
                    });
                }
            }
    });

// scrolify script
    if ($(window).width() < 984) {
        $.scrollify.disable();
    } else {
        $.scrollify.enable();
    }
    $.scrollify({
        section : ".panel",
        // sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",
        // scrollSpeed: 1100,
        scrollSpeed: 1200,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        // setHeights: true,
        setHeights: false,
        overflowScroll: true,
        // updateHash: true,
        updateHash: false,
        // touchScroll: true,
        touchScroll: false,
        before:function() {},
        after:function() {},
        afterResize: function() {},
        afterRender:function() {}
    });

// sliderPro script
    $('.slider-pro').sliderPro({
        width: 960,
        height: 540,
        buttons: true,
        autoplayDelay: 2400,
        fade: true,
        fadeDuration: 1200,
        fullScreen: true,
    });



});