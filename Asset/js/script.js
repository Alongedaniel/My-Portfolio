window.addEventListener("load", () => {
  const preloader = document.querySelector(".loader-style");
  preloader.classList.add("preload-finish");
  if (preloader.classList.add("preload-finish")) {
    let loadText = document.querySelector(".strong");

    window.addEventListener("load", () => {
      loadText.innerHTML = "Loaded";
    });
  }
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

let navBar = document.querySelector(".navbar");
function myFunction() {
  if (window.scrollY) {
    navBar.classList.add("fixed-navbar");
    console.log("it works");
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

window.addEventListener("load", () => {
  // send an email to me everytime the page is loaded
  if (
    !window.origin.includes("localhost") &&
    !window.origin.includes("http://127.0.0.1")
  ) {
    const formData = new FormData();
    console.log("Sending email", window.origin);
    formData.append("url", window.location.href);
    formData.append("name", "Notifier Bot");
    formData.append("email", "alongedaniel41@gmail.com");
    formData.append("message", "Your portfolio was visited");
    formData.append("Device", navigator.userAgent);
    fetch("https://formspree.io/f/xrgdzyeq", {
      credentials: "include",
      mode: "no-cors",
      method: "POST",
      body: formData,
    })
      .then(resp => resp.text())
      .then(text => console.log(text));
  }
});
