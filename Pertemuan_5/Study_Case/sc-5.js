let btnDark = document.querySelector(".btn-dark");
let btnLight = document.querySelector(".btn-light");
let svgDark = document.getElementById("svg-dark-id");
let svgLight = document.getElementById("svg-light-id");

svgDark.style.display = "none";

btnDark.addEventListener("click", function () {
  let darkBody = document.body;
  let darkContainer = document.querySelector(".svg-circle");
  let darkContainer1 = document.querySelector(".container-circle-1");

  svgDark.style.display = "flex";
  svgLight.style.display = "none";

  darkBody.classList.toggle("dark-mode");
  darkContainer.classList.toggle("dark-mode-container-circle");
  darkContainer1.classList.toggle("dark-mode-container-circle-1");
});

btnLight.addEventListener("click", function () {
  let darkBody = document.body;
  let darkContainer = document.querySelector(".svg-circle");
  let darkContainer1 = document.querySelector(".container-circle-1");

  svgDark.style.display = "none";
  svgLight.style.display = "flex";

  darkBody.classList.remove("dark-mode");
  darkContainer.classList.remove("dark-mode-container-circle");
  darkContainer1.classList.remove("dark-mode-container-circle-1");
});
