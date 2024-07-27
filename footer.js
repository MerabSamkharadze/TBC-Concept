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

    if (innerTagsDiv.classList.contains("no-height")) {
      innerTagsDiv.classList.remove("no-height");
    } else {
      innerTagsDiv.classList.add("no-height");
    }
  });
});
