$(document).ready(function () {
    $('.header__silder-owl').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        navText: [`<i class="fa-regular fa-chevron-left"></i>`,`<i class="fa-regular fa-chevron-right"></i>`]
    })
});