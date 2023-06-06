// For Search In Google Engine
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var searchInput = document.getElementById('search-input').value;
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(searchInput);
});