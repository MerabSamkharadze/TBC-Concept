"use strict";
const lang = document.querySelector(".lang");

document.querySelector(".footer-lang").addEventListener("click", () => {
  if (lang.style.display === "none") {
    lang.style.display = "flex";
  } else {
    lang.style.display = "none";
  }
});

const footerATags = document.querySelectorAll(".footer-content-column");

footerATags.forEach((el) => {
  el.addEventListener("click", () => {
    const innerTagsDiv = el.querySelector("div");

    footerATags.forEach((item) => {
      const otherDiv = item.querySelector("div");
      if (otherDiv !== innerTagsDiv) {
        otherDiv.style.height = "0";
      }
    });

    if (
      innerTagsDiv.classList.contains("prod_click") ||
      innerTagsDiv.classList.contains("offer_click") ||
      innerTagsDiv.classList.contains("library_click") ||
      innerTagsDiv.classList.contains("colection_click")
    ) {
      innerTagsDiv.style.height =
        innerTagsDiv.style.height === "135px" ? "0" : "135px";
    }
  });
});
