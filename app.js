const hamburger = document.querySelector(".hamburger-menu");
const navItems = document.querySelector(".menu-slide");
hamburger.addEventListener("click", () => {
  navItems.classList.toggle("open");
});

// CHANGE POSITION OF EYE
var loc = window.location.pathname;
console.log(loc);

var navHome = document.querySelector(".nav-item-home");
var navOngoing = document.querySelector(".nav-item-ongoing");
var navUpcoming = document.querySelector(".nav-item-upcoming");
var navContact = document.querySelector(".nav-item-contact");

if (loc.indexOf("ongoing") > -1) {
  console.log("ongoing");
}
