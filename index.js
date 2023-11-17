document
  .getElementById("darkModeButton")
  .addEventListener("click", toggleDarkMode);
document
  .getElementById("darkModeButton2")
  .addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("navbar-light");
  navbar.classList.toggle("navbar-dark");

  var metaTag = document.querySelector(
    'meta[name="apple-mobile-web-app-status-bar-style"]'
  );

  if (document.body.classList.contains("dark-mode")) {
    metaTag.setAttribute("content", "black-translucent");
  } else {
    metaTag.setAttribute("content", "default");
  }
}