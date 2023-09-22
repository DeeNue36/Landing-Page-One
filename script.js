const modeToggle = document.getElementById("modeToggle");
const body = document.body;
const aboutSection = document.getElementById("about");
const productsSection = document.getElementById("products");
const darkModeTextColor = "#000"; // Change this color to the desired text color in dark mode

modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        // Dark mode
        body.style.backgroundColor = "#333";
        body.style.color = darkModeTextColor;
        aboutSection.style.color = darkModeTextColor;
        productsSection.style.color = darkModeTextColor;
    } else {
        // Light mode
        body.style.backgroundColor = "#fff";
        body.style.color = "#333";
        aboutSection.style.color = "#333";
        productsSection.style.color = "#333";
    }
});
