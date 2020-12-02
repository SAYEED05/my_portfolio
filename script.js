/* $("#viewbtn").click(function () {
    $('html,body').animate({
        scrollTop: $("#work-content").offset().top
    },
        'slow');
}); */

//TO THE TOP BUTTON
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

//HERO CONTENT ANIMATION
gsap.from('.hero-content', {
    opacity: 0,
    x: -500,
    duration: 1,

});

//PROGRESSS BAR
gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 }
});

//CURSOR
const cursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('.navbar-nav');
const navbar = document.querySelectorAll('.navbar-brand');
const boldtext = document.querySelectorAll('.change');

/* const text=$('.hero-content p').text();
console.log(text) */
window.addEventListener('mousemove', func)
function func(e) {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';

}

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('cursor-hover');
        cursor.classList.add('link-hovertext');
    });
    link.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor-hover');
        cursor.classList.remove('link-hovertext');
    });
});

navbar.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('cursor-hover');
        cursor.classList.add('link-hovertext');
    });
    link.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor-hover');
        cursor.classList.remove('link-hovertext');
    });
});


boldtext.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('cursor-hover');
        cursor.classList.add('link-hovertext');
    });
    link.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor-hover');
        cursor.classList.remove('link-hovertext');
    });
});

