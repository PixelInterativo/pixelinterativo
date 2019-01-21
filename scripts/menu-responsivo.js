$(document).ready(function () {
    $('.toggler').click(function (e) { 
        e.preventDefault();
        $('.menu-responsivo').toggleClass("menu-visivel");
    });
    $('.corpo').click(function (e) { 
        e.preventDefault();
        $('.menu-responsivo').removeClass("menu-visivel");
    });
});