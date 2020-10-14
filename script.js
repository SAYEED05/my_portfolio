$("button").click(function () {
    $('html,body').animate({
        scrollTop: $("#work-content").offset().top
    },
        'slow');
});