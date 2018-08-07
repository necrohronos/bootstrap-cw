$(document).ready(function () {

  /*  var a = $("#main-nav").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('#main-nav').css({"background":"rgba(14, 216, 214, 0.74)"});
    } else {
       $('#main-nav').css({"background":"transparent"});
    }
}); */
  $(document).ready(function () {
    addScrolled();
});

$(window).scroll(function () {
    addScrolled();
});

function addScrolled() {
    if ($(window).scrollTop() > $('#main-nav').outerHeight()) {
        $('#main-nav').addClass('nav-scrolled');
    } else {
        $('#main-nav').removeClass('nav-scrolled');
    }
}  
    });