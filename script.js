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

gsap.from('.hero-content', {
    opacity: 0,
    x: -500,
    duration: 2,

});
//Progress bar
gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 }
});