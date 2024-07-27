"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    simulateTouch: true,
    breakpoints: {
      1100: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 2.5,
      },

      700: {
        slidesPerView: 1.8,
      },
      300: {
        slidesPerView: 1.1,
      },
      0: {
        slidesPerView: 0.4,
      },
    },
  });
});
