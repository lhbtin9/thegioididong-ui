// ##### Header Slider #####
$(document).ready(function () {
    $('.header__silder-owl').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        navText: [`<i class="fa-regular fa-chevron-left"></i>`, `<i class="fa-regular fa-chevron-right"></i>`]
    })
});

// #### Show/hide Modal #####
$(document).ready(function () {
    const modalOpenBtn = $('#header__location-panel');
    const modalCloseBtn = $('#modal__header-close-btn');
    const modalElement = $('#modal');
    $(modalOpenBtn).click(function (e) { 
        e.preventDefault();
        $(modalElement).addClass('modal--active');
    });
    $(modalCloseBtn).click(function (e) { 
        e.preventDefault();
        $(modalElement).removeClass('modal--active');
    });
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