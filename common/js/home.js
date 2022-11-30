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
        600:{
            items:2
        },
        1000:{
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
        items: 5,
        dots: false,
        lazyLoad: true,
        navText: [`<i class="fa-regular fa-chevron-left"></i>`, `<i class="fa-regular fa-chevron-right"></i>`]
    })
});

// ##### product-slider-two-slider__first-owl #####
$('.product-slider-two-slider__first-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: [`<i class="fa-regular fa-chevron-left"></i>`, `<i class="fa-regular fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$(document).ready(function () {
    $('.product-slider-two-slider-owl').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 5,
        dots: false,
        lazyLoad: true,
        navText: [`<i class="fa-regular fa-chevron-left"></i>`, `<i class="fa-regular fa-chevron-right"></i>`]
    })
});

// ##### Discount payment slider #####
$('.discount-payment__slider-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: [`<i class="fa-regular fa-chevron-left"></i>`, `<i class="fa-regular fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})