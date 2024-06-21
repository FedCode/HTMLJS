document.addEventListener("DOMContentLoaded", function() {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Function to add animations when the section is in the viewport
    function animateOnScroll() {
      const elements = document.querySelectorAll('.animation_style');
      const heading = document.querySelector('.heading__h2');
      const paragraph = document.querySelector('.paragraph__p');
      const button = document.querySelector('.button__primary');
  
      elements.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('animate');
        }
      });
  
      if (isInViewport(elements[1])) {
        heading.classList.add('visible');
        paragraph.classList.add('visible');
        button.classList.add('visible');
      }
    }
  
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
  
    // Trigger animation on page load if already in viewport
    animateOnScroll();
  });
  