//Splide Slider JS

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#vertical-slider', {
        type: false,
        direction: 'ttb', 
        height: '30vh', 
        pagination: false,
        wheel: true,
        arrows: false,
        speed: 1600, 
    }).mount();
});
