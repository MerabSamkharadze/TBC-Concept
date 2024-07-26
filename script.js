"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");

  menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("active");
  });
});

/// triger
const triger_icon_over = document.querySelector(".triger_icon_over");
const triger_icon = document.querySelector(".triger_icon");
const button_menu_trigger = document.querySelector(".button_menu_trigger");
const button_clicked_content = document.querySelector(
  ".button_clicked_content"
);
const button_menu = document.querySelector(".button_menu");
let clicked = true;
button_menu_trigger.addEventListener("click", () => {
  if (clicked) {
    button_clicked_content.style.opacity = "1";
    triger_icon.style.opacity = "0";
    triger_icon_over.style.opacity = "1";
    button_menu.style.gridTemplateRows = "1fr 56px";

    clicked = false;
  } else {
    button_clicked_content.style.opacity = "0";
    triger_icon_over.style.opacity = "0";
    triger_icon.style.opacity = "1";
    button_menu.style.gridTemplateRows = "56px";

    clicked = true;
  }
});
