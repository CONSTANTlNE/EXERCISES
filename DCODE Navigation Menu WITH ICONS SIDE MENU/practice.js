window.addEventListener("DOMContentLoaded", () => {
  let blur = document.querySelector(".overlay");
  let aside = document.querySelector("aside");
  document.querySelector("button").addEventListener("click", () => {
    aside.classList.add("open");
    blur.classList.add("open2");
  });

  blur.addEventListener("click", () => {
    aside.classList.remove("open");
    blur.classList.remove("open2");
  });
});
