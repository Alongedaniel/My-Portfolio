let webClick = document.querySelector(".for-web");
let appClick = document.querySelector(".for-app");
let selectAll = document.querySelector(".for-all");
let allWeb = document.querySelectorAll(".web");
let allApp = document.querySelectorAll(".app");

webClick.addEventListener("click", function () {
  allWeb.forEach((web) => (web.style.display = "block"));
  allApp.forEach((app) => (app.style.display = "none"));
  webClick.style.color = "#758808";
  appClick.style.color = "#000";
});

appClick.addEventListener("click", function () {
  allApp.forEach((app) => (app.style.display = "block"));
  allWeb.forEach((web) => (web.style.display = "none"));
  appClick.style.color = "#758808";
  webClick.style.color = "#000";
});

selectAll.addEventListener("click", function () {
  allApp.forEach((app) => (app.style.display = "block"));
  allWeb.forEach((web) => (web.style.display = "block"));
  appClick.style.color = "#000";
  webClick.style.color = "#000";
});
