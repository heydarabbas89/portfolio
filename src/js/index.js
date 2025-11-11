const icon = document.querySelector(".mdi--hamburger-menu");
const navList = document.querySelector(".nav-list");
const activePage = window.location.href;

document.getElementsByClassName("copyYear").innerText =
  new Date().getFullYear();

document.querySelectorAll("nav ul li a").forEach((link) => {
  if (link.href === activePage) {
    link.classList.add("active");
  }
});

document.querySelector(".toggle-menu").addEventListener("click", function () {
  if (icon.classList.contains("mdi--hamburger-menu")) {
    icon.classList.replace("mdi--hamburger-menu", "mdi--window-close");
    navList.classList.add("open-menu");
  } else {
    icon.classList.replace("mdi--window-close", "mdi--hamburger-menu");
    navList.classList.remove("open-menu");
  }
});

document.querySelector(".contact-dropdown").addEventListener("click", () => {
  document.querySelector(".dropdown").classList.toggle("open");
});
