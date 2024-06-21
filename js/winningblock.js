// Winning Blog on scroll animation js

document.addEventListener('DOMContentLoaded', function() {
    const circle = document.getElementById('circle');
    const circleSvg = document.getElementById('circle-svg');
    const placeholder = document.getElementById('placeholder');
    const text = document.getElementById('text');
    let hasAnimated = false;

    function animateCircle() {
        circle.style.strokeDashoffset = '0';

        setTimeout(() => {
            circleSvg.classList.add('hidden');
            placeholder.style.display = 'block';
            placeholder.classList.add('zoom-in');

            setTimeout(() => {
                text.classList.add('visible');
            }, 1000); // wait for the image animation to finish
        }, 2000); // delay to match the circle drawing duration
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                animateCircle();
                hasAnimated = true;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.7 }); // Set threshold to 20%

    observer.observe(document.querySelector('.winning__block'));
});

