"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");

  menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("active");
  });
});
