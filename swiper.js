"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 3, // Number of slides to show at once
    spaceBetween: 30, // Space between slides in px
    loop: false, // Enable continuous loop mode
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false, // Always show scrollbar
      draggable: true, // Make scrollbar draggable
    },
    simulateTouch: true, // Enable dragging on desktop (default behavior)
  });
});
