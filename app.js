const hamburger = document.querySelector(".hamburger-menu");
const navItems = document.querySelector(".menu-slide");
hamburger.addEventListener("click", () => {
  navItems.classList.toggle("open");
});

// CHANGE POSITION OF MENU-EYE
var loc = window.location.pathname;
console.log(loc);
var navEye = document.querySelector(".nav-eye");

if (loc.indexOf("ongoing") > -1) {
  navEye.classList.add("ongoing");
}
if (loc.indexOf("upcoming") > -1) {
  navEye.classList.add("upcoming");
}
// #contact will not show in url so its not working
if (loc.indexOf("#contact") > -1) {
  navEye.classList.add("nav-contact");
}
