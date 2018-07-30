$(document).ready(function () {
    $(window).scroll(function () addScrolled());

    function addScrolled() {
        if ($(window).scrollTop() > $('#main-nav').outerHeight()) {
            $('#main-nav').addClass('nav-scrolled')
        } else {
            $('#main-nav').removeClass('nav-scrolled')
        }

    }
})
