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

// GET EYES TO ROLL

$(".move-area").mousemove(function (event) {
  var eye = $(".eye");
  console.log("eye", eye);
  var x = eye.offset().left + eye.width() / 2;
  var y = eye.offset().top + eye.height() / 2;
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = rad * (180 / Math.PI) * -1 + 180;
  eye.css({
    "-webkit-transform": "rotate(" + rot + "deg)",
    "-moz-transform": "rotate(" + rot + "deg)",
    "-ms-transform": "rotate(" + rot + "deg)",
    transform: "rotate(" + rot + "deg)",
  });
});
