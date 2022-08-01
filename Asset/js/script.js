let webClick = document.querySelector(".for-web");
let appClick = document.querySelector(".for-app");
let selectAll = document.querySelector(".for-all");
let allWeb = document.querySelectorAll(".web");
let allApp = document.querySelectorAll(".app");

webClick.addEventListener("click", function () {
  allWeb.forEach((web) => (web.style.display = "inline-block"));
  allApp.forEach((app) => (app.style.display = "none"));
  webClick.style.color = "#146ebe";
  appClick.style.color = "#000";
});

appClick.addEventListener("click", function () {
  allApp.forEach((app) => (app.style.display = "inline-block"));
  allWeb.forEach((web) => (web.style.display = "none"));
  appClick.style.color = "#146ebe";
  webClick.style.color = "#000";
});

selectAll.addEventListener("click", function () {
  allApp.forEach((app) => (app.style.display = "inline-block"));
  allWeb.forEach((web) => (web.style.display = "inline-block"));
  appClick.style.color = "#000";
  webClick.style.color = "#000";
});


// let menu = document.querySelector('.bars')
// let menuBar = document.querySelector('.mobile-nav-links')

// function menuClick() {
//   menuBar.style.bottom = '0'
// }
