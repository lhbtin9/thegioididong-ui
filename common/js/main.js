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

// ##### Show/hide navbar when scroll #####
function hideShowNavbarWhenScroll () {
    const header = document.querySelector(".header__second");
    let lastScroll = 0;
    let addClass = false;
    window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll - lastScroll < 0) addClass = true;
    if(currentScroll < 100) {
        addClass = false;
        header.classList.remove("header__second--scroll-default");
        } else if (currentScroll < 300) {
            if (currentScroll - lastScroll < 0) {
                header.classList.add("header__second--scroll-default");
                header.classList.remove("header__second--scroll-up");
            }
        } else if(currentScroll > 500) {
            if(addClass) {
                if (currentScroll - lastScroll > 0) {
                    header.classList.add("header__second--scroll-down");
                    header.classList.remove("header__second--scroll-up");
                } else {
                    header.classList.add("header__second--scroll-up");
                    header.classList.remove("header__second--scroll-down");
                }
            }
        }
    
    lastScroll = currentScroll;
    })
}

hideShowNavbarWhenScroll();