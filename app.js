const hamburger = document.querySelector(".hamburger-menu");
const navItems = document.querySelector(".menu-slide");
hamburger.addEventListener("click", () => {
  navItems.classList.toggle("open");
});
