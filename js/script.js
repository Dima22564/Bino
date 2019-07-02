$(document).ready(function () {
    // Burger menu
    $('.fa-bars').click(function (e) {
        e.preventDefault();
        $('.header-nav-items').addClass('menu-active');
        $(this).hide();
        $('.fa-times').show();
    })

    $('.fa-times').click(function (e) {
        e.preventDefault();
        $('.header-nav-items').removeClass('menu-active');
        $(this).hide();
        $('.fa-bars').show();
    })

    // Click links
    $('.header-nav-link').click(function (e) {
        e.preventDefault();
        $('.header-nav-link').removeClass('active');
        $(this).addClass('active');
        var attr = $(this).attr('href');
        var pos = $(attr).offset().top - $('.header-menu').innerHeight();
        $('html').animate({
            scrollTop: pos
        }, 1000)
    })

     // Anchor img
     $('.anchor').click(function (e) {
        e.preventDefault();
        var attr = $(this).attr('href');
        var pos = $(attr).offset().top - $('.header-menu').innerHeight();
        $('html').animate({
            scrollTop: pos
        }, 600)
    })

    // Filter
    function filter(data) {
        $('.portfolio-part1-item').not(`.${data}`).fadeOut();
        $('.portfolio-part1-item').filter(`.${data}`).fadeIn();
    }
    $('.portfolio-part1-nav li').click(function (e) {
        filter($(this).attr('data-item'));
        $('.portfolio-part1-nav li').removeClass('active');
        $(this).addClass('active');
    })


    // Show menu
    var stop = false;
    var initPad = $('.header').css('padding-top');
    $(window).scroll(function (e) {
        var scroll = $(this).scrollTop();
        var items = $('section, header');

        var currentItem = items.map(function () {
            if ($(this).offset().top - $('.header-menu').innerHeight() - 1 <= scroll) {
                return $(this);
            }
        })
        var elAttr = currentItem[currentItem.length - 1].attr('id')
        $('.header-nav-items a').removeClass('active');
        $('.header-nav-items').find('a[href=#' + elAttr + ']').addClass('active');


        add();
        menu();

    })

    $(window).on('resize', add);
    $(window).on('resize', menu);

    function menu(){
        var padding = $('.header').css('padding-top');
        var px = padding.indexOf('px');
        padding = +padding.slice(0, px);
        var height = +$('.header-menu').innerHeight();
        padding += height
        
        if (screen.width > 992 && stop == false) {
            $('.header-menu').animate({
                opacity: 0
            }, 500, function(){
                $('.header').css({
                    paddingTop: padding
                })
                $('.header-menu').addClass('menu-fixed');
            }).animate({
                opacity: 1
            }, 500)
            stop = true;
        }
        else if (screen.width < 992 && stop == true){
            stop = false;
            $('.header').css({
                paddingTop: initPad
            })

            $('.header-menu').removeClass('menu-fixed');
        }
    }

    function add(){
        if(screen.width < 992){
            $('.portfolio-part3-item').addClass('col-md-4 col-sm-6');
        }
        else{
            $('.portfolio-part3-item').removeClass('col-md-4 col-sm-6');
        }
    }

    // To top
    $('#toTop').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 1500)
    })


    // Sliders
    $('.header-slider').slick({
        arrows: true,
        slidesToShow: 1
    });

    $('.slider-content').slick({
        dots: true,
        vertical: true,
        slidesToShow: 3,
        arrows: false,
        verticalSwiping: true,
        autoplay: true
    })

    $('.slider-content-1').slick({
        dots: true,
        vertical: true,
        slidesToShow: 3,
        arrows: false,
        verticalSwiping: true,
        autoplay: true
    })

    $('.portfolio-part2-slider').slick({
        dots: true,
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.portfolio-part2-nav-slider'
    })

    $('.portfolio-part2-nav-slider').slick({
        slidesToShow: 1,
        dots: false,
        arrows: false,
        asNavFor: '.portfolio-part2-slider',
        fade: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                fade: false,
                focusOnSelect: true,
                vertical: true
            }
        }, ]
    })




});