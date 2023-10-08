
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}


const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", toggleDarkMode);


const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDarkMode) {
    toggleDarkMode();
}
