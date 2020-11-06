$("#viewbtn").click(function () {
    $('html,body').animate({
        scrollTop: $("#work-content").offset().top
    },
        'slow');
});


totopbtn = document.getElementById("totopbtn");
window.onscroll = function () { scrollfunction() };
function scrollfunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        totopbtn.style.display = "block";
    }
    else {
        totopbtn.style.display = "none";
    }
}

function topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
