

// Function to generate random numbers within a range
function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Function to animate the images
  function animateImage(image, axis, range) {
    const duration = random(3, 6); // Random duration between 3 to 6 seconds
    const position = random(-range, range); // Random position within the range
  
    let keyframes = {};
    if (axis === 'x') {
        keyframes = [
            { transform: `translateX(${position}px)` },
            { transform: `translateX(${-position}px)` },
            { transform: `translateX(${position}px)` }
        ];
    } else if (axis === 'y') {
        keyframes = [
            { transform: `translateY(${position}px)` },
            { transform: `translateY(${-position}px)` },
            { transform: `translateY(${position}px)` }
        ];
    } else if (axis === 'xy') {
        keyframes = [
            { transform: `translate(${position}px, ${position}px)` },
            { transform: `translate(${-position}px, ${-position}px)` },
            { transform: `translate(${position}px, ${position}px)` }
        ];
    }
  
    image.animate(keyframes, {
        duration: duration * 1000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');
  
    // Animate image1 from right to left and left to right
    animateImage(image1, 'x', 50);
  
    // Animate image2 from left to right and right to left
    animateImage(image2, 'x', 50);
  
    // Animate image3 top to bottom and bottom to top
    animateImage(image3, 'y', 50);
  });
  