//Appoach block js

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
      threshold: 0.2
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const targets = document.querySelectorAll('.approach__image, .approach__item');
    targets.forEach(target => {
      observer.observe(target);
    });
  });


