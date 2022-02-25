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

// $(".move-area").mousemove(function (event) {
//   var eye = $(".eye");
//   console.log("eye", eye);
//   var x = eye.offset().left + eye.width() / 2;
//   var y = eye.offset().top + eye.height() / 2;
//   var rad = Math.atan2(event.pageX - x, event.pageY - y);
//   var rot = rad * (180 / Math.PI) * -1 + 180;
//   eye.css({
//     "-webkit-transform": "rotate(" + rot + "deg)",
//     "-moz-transform": "rotate(" + rot + "deg)",
//     "-ms-transform": "rotate(" + rot + "deg)",
//     transform: "rotate(" + rot + "deg)",
//   });
// });

window.onload = function () {
  canv = document.getElementById("gc");

  ctx = canv.getContext("2d");

  document.addEventListener("keydown", keyPush);

  setInterval(game, 1000 / 15);
};

px = py = 10;

gs = tc = 20;

ax = ay = 15;

xv = yv = 0;

trail = [];

tail = 5;

function game() {
  px += xv;

  py += yv;

  if (px < 0) {
    px = tc - 1;
  }

  if (px > tc - 1) {
    px = 0;
  }

  if (py < 0) {
    py = tc - 1;
  }

  if (py > tc - 1) {
    py = 0;
  }

  ctx.fillStyle = "black";

  ctx.fillRect(0, 0, canv.width, canv.height);

  ctx.fillStyle = "lime";

  for (var i = 0; i < trail.length; i++) {
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);

    if (trail[i].x == px && trail[i].y == py) {
      tail = 5;
    }
  }

  trail.push({ x: px, y: py });

  while (trail.length > tail) {
    trail.shift();
  }

  if (ax == px && ay == py) {
    tail++;

    ax = Math.floor(Math.random() * tc);

    ay = Math.floor(Math.random() * tc);
  }

  ctx.fillStyle = "red";

  ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}

function keyPush(evt) {
  switch (evt.keyCode) {
    case 74:
      xv = -1;
      yv = 0;

      break;

    case 73:
      xv = 0;
      yv = -1;

      break;

    case 76:
      xv = 1;
      yv = 0;

      break;

    case 75:
      xv = 0;
      yv = 1;

      break;
  }
}
