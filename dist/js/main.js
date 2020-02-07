// Humburger Navbar
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector(".closeBtn");
const sideMenu = document.querySelector("#side-menu");

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

function openMenu() {
  sideMenu.style.width = "40%";
}

function closeMenu() {
  sideMenu.style.width = "0";
}
