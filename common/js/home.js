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