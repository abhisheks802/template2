$(document).ready(function () {
    $(".img1").mouseover(function () {
        $(this).hide();
        $(".img2").fadeIn(600);
    });
    $(".img2").mouseleave(function () {
        $(this).hide();
        $(".img1").fadeIn(600);
    });
    $(".dropdown").click(function () {
        $(".menu-box").slideToggle();
    });
    if($(window).width() < 1025) {
        $(".menu li").click(function () {
            $(".menu-box").slideUp();
        });
    }
    $("#read").click(function () {
        $(".other-words").fadeToggle();
    });
    $(".cart").on("click", function () {
        $(this).closest(".img-price")
            .find("img")
            .clone()
            .addClass("zoom")
            .appendTo(".nav-bar");
        setTimeout(function () {
            $(".zoom").remove();
        },1000);
    });
    $("#come-top").click(function () {
        window.location.href = "#products";
    });

});
