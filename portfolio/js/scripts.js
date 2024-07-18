document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000); // Show loading screen for 2 seconds
});

particlesJS.load('home', 'particles.json', function() {
    console.log('Particles.js config loaded');
});

const typed = new Typed('.typed-text', {
    strings: ["Developer.", "Designer.", "Creator."],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});
