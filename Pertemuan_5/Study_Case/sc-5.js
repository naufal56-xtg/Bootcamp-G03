let btnDark = document.querySelector(".btn-dark");
let btnLight = document.querySelector(".btn-light");
let svgDark = document.getElementById("svg-dark-id");
let svgLight = document.getElementById("svg-light-id");
let textCopy = document.getElementById("copy");

svgDark.style.display = "none";

btnDark.addEventListener("click", function () {
  let darkBody = document.body;
  let darkContainer = document.querySelector(".svg-circle");
  let darkContainer1 = document.querySelector(".container-circle-1");
  let darkBoxLogin = document.querySelector(".container-box-login");
  let darkBoxImage = document.querySelector(".container-box-image");
  let darkInputUser = document.querySelector(".container-input-username");
  let darkInputPass = document.querySelector(".container-input-password");
  let darkSvgUser = document.querySelector(".svg-username-fill");
  let darkTextUser = document.querySelector(".text-user");
  let darkTextPass = document.querySelector(".text-pass");
  let darkTextLogin = document.querySelector(".text-login");
  let darkLineV = document.querySelector(".line-v");
  let darkLineV2 = document.querySelector(".line-v-2");

  svgDark.style.display = "flex";
  svgLight.style.display = "none";
  textCopy.style.display = "none";

  darkBody.classList.toggle("dark-mode");
  darkContainer.classList.toggle("dark-mode-container-circle");
  darkContainer1.classList.toggle("dark-mode-container-circle-1");
  darkBoxLogin.classList.toggle("dark-mode-container-box-login");
  darkBoxImage.classList.toggle("dark-mode-container-box-image");
  darkInputUser.classList.toggle("dark-mode-container-input-username");
  darkInputPass.classList.toggle("dark-mode-container-input-password");
  darkSvgUser.classList.toggle("dark-mode-svg-username-fill");
  darkTextUser.classList.toggle("dark-mode-text-user");
  darkTextPass.classList.toggle("dark-mode-text-pass");
  darkTextLogin.classList.toggle("dark-mode-text-login");
  darkLineV.classList.toggle("dark-mode-line-v");
  darkLineV2.classList.toggle("dark-mode-line-v-2");
});

btnLight.addEventListener("click", function () {
  let darkBody = document.body;
  let darkContainer = document.querySelector(".svg-circle");
  let darkContainer1 = document.querySelector(".container-circle-1");
  let darkBoxLogin = document.querySelector(".container-box-login");
  let darkBoxImage = document.querySelector(".container-box-image");
  let darkInputUser = document.querySelector(".container-input-username");
  let darkInputPass = document.querySelector(".container-input-password");
  let darkSvgUser = document.querySelector(".svg-username-fill");
  let darkTextUser = document.querySelector(".text-user");
  let darkTextPass = document.querySelector(".text-pass");
  let darkTextLogin = document.querySelector(".text-login");
  let darkLineV = document.querySelector(".line-v");
  let darkLineV2 = document.querySelector(".line-v-2");

  svgDark.style.display = "none";
  svgLight.style.display = "flex";
  textCopy.style.display = "flex";

  darkBody.classList.remove("dark-mode");
  darkContainer.classList.remove("dark-mode-container-circle");
  darkContainer1.classList.remove("dark-mode-container-circle-1");
  darkBoxLogin.classList.remove("dark-mode-container-box-login");
  darkBoxImage.classList.remove("dark-mode-container-box-image");
  darkInputUser.classList.remove("dark-mode-container-input-username");
  darkInputPass.classList.remove("dark-mode-container-input-password");
  darkSvgUser.classList.remove("dark-mode-svg-username-fill");
  darkTextUser.classList.remove("dark-mode-text-user");
  darkTextPass.classList.remove("dark-mode-text-pass");
  darkTextLogin.classList.remove("dark-mode-text-login");
  darkLineV.classList.remove("dark-mode-line-v");
  darkLineV2.classList.remove("dark-mode-line-v-2");
});
