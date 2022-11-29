// ##### Header Slider #####
$(document).ready(function () {
    $('.header__silder-owl').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        lazyLoad: true,
        navText: [`<i class="fa-regular fa-chevron-left"></i>`, `<i class="fa-regular fa-chevron-right"></i>`]
    })
});

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

// ##### Modal input filter items #####
const modalLocationInput = document.getElementById('modal-filter-locaion');
modalLocationInput.onkeyup = function () {
    var modalFilter = modalLocationInput.value.toUpperCase();
    var lis = document.getElementsByClassName("modal__location-item");
    for (var i = 0; i < lis.length; i++) {
        var name = lis[i].innerHTML;
        
        if (name.toUpperCase().indexOf(modalFilter) == 0)
            lis[i].style.display = 'inline';
        else
            lis[i].style.display = 'none';
    }
}


// #### Show/hide Modal #####
$(document).ready(function () {
    const modalOpenBtn = $('#header__location-panel');
    const modalCloseBtn = $('#modal__header-close-btn');
    const modalOverlay = $('#modal__overlay');
    const modalBody = $('#modal__body');
    const modalElement = $('#modal');

    $(modalOpenBtn).click(function (e) { 
        e.preventDefault();
        $(modalElement).addClass('modal--active');
        $("body").addClass("no-scroll");
    });

    $(modalCloseBtn).click(function (e) { 
        e.preventDefault();
        $(modalElement).removeClass('modal--active');
        $('body').removeClass('no-scroll');
    });
});

// ##### Show/hide navbar on Tablet & Mobile #####
$(document).ready(function () {
    const navbarElement = $('#header__navbar');
    const openNavbarBtn = $('#header__bars-btn');
    const closeNavbarBtn = $('#header__navbar-close-btn');

    $(openNavbarBtn).click(function (e) { 
        e.preventDefault();
        const checkHiden = $(navbarElement).hasClass('hide-on-lg');
        if(checkHiden) $(navbarElement).removeClass('hide-on-lg');
        $(navbarElement).addClass('header__navbar--active');
        $("body").addClass("no-scroll");
    });

    $(closeNavbarBtn).click(function (e) { 
        e.preventDefault();
        $(navbarElement).removeClass('header__navbar--active');
        $('body').removeClass('no-scroll');
    });
});


// ##### Show/hide Header__Search on moblie
$(document).ready(function () {
    const searchElement = $('#header__search');
    const searchBtn = $('#header__search-btn');

    $(searchBtn).click(function (e) { 
        e.preventDefault();
        const checkHiden = $(searchElement).hasClass('hide-on-sm');
        if(checkHiden) $(searchElement).removeClass('hide-on-sm');
        $(searchElement).toggleClass('header__search--active');
    });
});

