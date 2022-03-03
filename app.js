const hamburger = document.querySelector(".hamburger-menu");
const navItems = document.querySelector(".menu-slide");
const menuButtonDesktop = document.querySelector(".menu-desktop");
const navBar = document.querySelector(".navbar");
hamburger.addEventListener("click", () => {
  navItems.classList.toggle("open");
});

menuButtonDesktop.addEventListener("click", () => {
  menuButtonDesktop.classList.toggle("open-desktop");
  navItems.classList.toggle("open");
  navBar.classList.toggle("navbar-open");
});

const moveDown = document.querySelector(".move-down");
moveDown.addEventListener("click", () => {
  window.scrollTo({ top: 620, behavior: "smooth" });
});

window.onload = function () {
  canv = document.getElementById("gc");

  ctx = canv.getContext("2d");

  document.addEventListener("keydown", keyPush);

  setInterval(game, 1000 / 10);
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

  ctx.fillStyle = "#FFADFF";

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

  ctx.fillStyle = "#DEFA77";

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
