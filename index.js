document
  .getElementById("darkModeButton")
  .addEventListener("click", toggleDarkMode);
document
  .getElementById("darkModeButton2")
  .addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("navbar-light");
  navbar.classList.toggle("navbar-dark");
}