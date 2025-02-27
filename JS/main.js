








let navLinks = document.querySelectorAll('.nav-link');

const nav = document.querySelector('.nav');
document.addEventListener('DOMContentLoaded', () => {
    const headerLeft = document.querySelector('.header-left');
    const headerRight = document.querySelector('.header-right');
    const homeInfo = document.querySelector('.home-info');
    const homeBtn = document.querySelector('.home-btn');

    nav.classList.add('show');
    headerLeft.classList.add('show');
    headerRight.classList.add('show');

    // Only run these if they exist
    if (homeInfo) homeInfo.classList.add('show');
    if (homeBtn) homeBtn.classList.add('show');

    setTimeout(() => {
        navLinks.forEach((link) => {
            link.classList.add('show');
        });
    }, 1300);
});




let navBtn = document.querySelector('.nav-btn');

navBtn.addEventListener('click',()=>{
    navBtn.classList.toggle('open');
    nav.classList.toggle('active');
});


// Starfield animation
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("starfield");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); 

    let stars = [];
    for (let i = 0; i < 100; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3,
            speed: Math.random() * 0.5  + 0.3
        });
    }

    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
        });
        requestAnimationFrame(animateStars);
    }
    animateStars();
});


AOS.init();

