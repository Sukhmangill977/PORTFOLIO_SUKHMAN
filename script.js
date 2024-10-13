function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const logo = document.getElementById('logo');
const logoMobile = document.getElementById('logo-mobile');
const colors = ['#ff5733', '#33c9ff', '#a833ff', '#ff33a6']; // Array of colors
let colorIndex = 0;

function changeLogoColor() {
  logo.style.color = colors[colorIndex];
  logoMobile.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
}

setInterval(changeLogoColor, 2000); // Change color every 5 seconds
