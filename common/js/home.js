$('.slider-first-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    margin: 20,
    lazyLoad: true,
    navText: [`<i class="fa-regular fa-chevron-left"></i>`, `<i class="fa-regular fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        1024:{
            items:2
        }
    }
})

// ##### product-slider-one-slider-owl #####
$(document).ready(function () {
    $('.product-slider-one-slider-owl').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        lazyLoad: true,
        navText: [`<i class="fa-regular fa-chevron-left"></i>`, `<i class="fa-regular fa-chevron-right"></i>`],
        responsive:{
            0:{
                items:2
            },
            741:{
                items: 3
            },
            1025:{
                items:4
            },
            1239:{
                items:5
            }
        }
    })
});

// ##### common slider #####
$('.common__slider-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay: true,
    navText: [`<i class="fa-regular fa-chevron-left"></i>`, `<i class="fa-regular fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:2
        },
        577:{
            items:2
        },
        740:{
            items:2
        },
        1024:{
            items:3
        }
    }
})

$(document).ready(function () {
    $('.today-suggestions__tabs-item').click(function (e) { 
        e.preventDefault();
        const activeIndex = $(this).parent().index();
        const oldActive = $('.today-suggestions__content--active');

        $('.today-suggestions__tabs-item--active').removeClass('today-suggestions__tabs-item--active');
        $(`.today-suggestions__tabs-index:nth-child(${activeIndex + 1}) .today-suggestions__tabs-item`).addClass('today-suggestions__tabs-item--active');

        $('.today-suggestions__content--hide-effect').removeClass('today-suggestions__content--hide-effect');
        $(oldActive).addClass('today-suggestions__content--hide-effect');
        $(oldActive).removeClass('today-suggestions__content--active');
        $(`.today-suggestions__content:nth-child(${activeIndex + 1})`).addClass('today-suggestions__content--active');
    });
});