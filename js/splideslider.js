
document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('#testimonial__slider', {
      type:false,
      perPage: 1,
      perMove: 1,
      pagination: false, // Disable default pagination
      arrows: true,
   });

    splide.mount();

    // Custom pagination
    var customPagination = document.querySelectorAll('.custom-pagination li');
    customPagination.forEach(function (paginationItem, index) {
      paginationItem.addEventListener('click', function () {
        splide.go(index);
      });
    });

    splide.on('move', function (newIndex) {
      customPagination.forEach(function (item) {
        item.classList.remove('is-active');
      });
      customPagination[newIndex].classList.add('is-active');
      
      // Handle arrow states
      var prevArrow = document.querySelector('.splide__arrow--prev');
      var nextArrow = document.querySelector('.splide__arrow--next');

      prevArrow.classList.remove('disabled');
      nextArrow.classList.remove('disabled');

      if (newIndex === 0) {
        prevArrow.classList.add('disabled');
      } else if (newIndex === splide.Components.Slides.getLength() - 1) {
        nextArrow.classList.add('disabled');
      }
    });

    // Initialize first item as active
    customPagination[0].classList.add('is-active');

    // Center custom pagination
    var customPaginationContainer = document.querySelector('.custom-pagination');
    customPaginationContainer.style.marginLeft = `calc(50% - ${customPaginationContainer.offsetWidth / 2}px)`;

    // Trigger initial move event to set arrow states correctly
    splide.emit('move', 0);
}); 


  
  


