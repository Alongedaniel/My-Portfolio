window.addEventListener("load", () => {
  const preloader = document.querySelector(".loader-style");
  preloader.classList.add("preload-finish");
});

let webClick = document.querySelector(".for-web");
let appClick = document.querySelector(".for-app");
let selectAll = document.querySelector(".for-all");
let allWeb = document.querySelectorAll(".web");
let allApp = document.querySelectorAll(".app");

webClick.addEventListener("click", function () {
  allWeb.forEach((web) => (web.style.display = "inline-block"));
  allApp.forEach((app) => (app.style.display = "none"));
  webClick.style.color = "#146ebe";
  appClick.style.color = "var(--text-color-dark)";
  selectAll.style.color = "var(--text-color-dark)";
});

appClick.addEventListener("click", function () {
  allApp.forEach((app) => (app.style.display = "inline-block"));
  allWeb.forEach((web) => (web.style.display = "none"));
  appClick.style.color = "#146ebe";
  webClick.style.color = "var(--text-color-dark)";
  selectAll.style.color = "var(--text-color-dark)";
});

selectAll.addEventListener("click", function () {
  allApp.forEach((app) => (app.style.display = "inline-block"));
  allWeb.forEach((web) => (web.style.display = "inline-block"));
  selectAll.style.color = '#146ebe'
  webClick.style.color = "var(--text-color-dark)";
  appClick.style.color = "var(--text-color-dark)";
});

let navBar = document.querySelector(".navbar");
function myFunction() {
  if (window.scrollY) {
    navBar.classList.add("fixed-navbar");
  } else {
    navBar.classList.remove("fixed-navbar");
  }
}

let themeChanger = document.querySelector(".theme-changer");
let body = document.body;
let audio = document.querySelector(".audio");
themeChanger.onclick = () => {
  body.classList.toggle("dark-mode");
  audio.play();
};


function scrollMySkill() {
  window.scrollTo({
    top: 700,
    left: 0,
    behavior:"smooth"
   })
 }


function scrollMyProject() {
  window.scrollTo({
    top: 1400,
    left: 0,
    behavior:"smooth"
   })
 }


function scrollAbout() {
  window.scrollTo({
    top: 2700,
    left: 0,
    behavior:"smooth"
   })
}
 
function scrollContact() {
  window.scrollTo({
    top: 3250,
    left: 0,
    behavior:"smooth"
   })
}



 
//      Mobile

function mobileScrollMySkill() {
  window.scrollTo({
    top: 700,
    left: 0,
    behavior:"smooth"
   })
 }
function mobileScrollMyProject() {
  window.scrollTo({
    top: 1940,
    left: 0,
    behavior:"smooth"
   })
 }
function mobileScrollAbout() {
  window.scrollTo({
    top: 5100,
    left: 0,
    behavior:"smooth"
   })
 }
function mobileScrollContact() {
  window.scrollTo({
    top: 5800,
    left: 0,
    behavior:"smooth"
   })
 }
