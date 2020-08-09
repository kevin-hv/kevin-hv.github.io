
var mySwiper = new Swiper('.swiper-container', {

direction: 'horizontal',
spaceBetween: 30,
centeredSlides: false,
slidesPerView: 'auto',


pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    },

    breakpoints: {
        1500: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        500: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      }

})
