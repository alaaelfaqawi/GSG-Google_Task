// For Search In Google Engine
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var searchInput = document.getElementById('search-input').value;
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(searchInput);
});
// For Switch In Dark & Light Mode and save it at local storage
let darkMode = document.querySelector(".dark_mode");
let body = document.body;
let appsIcon = document.querySelector(".appsIcon");

const isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

if (isDarkModeEnabled) {
  body.classList.add("dark-mode");
  appsIcon.src = "images/appsIcon.png";
}

darkMode.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    appsIcon.src = "images/appsIcon.png";
    localStorage.setItem("darkModeEnabled", "true");
  } else {
    appsIcon.src = "images/appsIconWhite.png";
    localStorage.removeItem("darkModeEnabled");
  }
});
