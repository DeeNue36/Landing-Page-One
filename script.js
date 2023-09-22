const modeToggle = document.getElementById("modeToggle");
const body = document.body;

modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        // Dark mode
        body.style.backgroundColor = "#333";
        body.style.color = "#fff";
    } else {
        // Light mode
        body.style.backgroundColor = "#fff";
        body.style.color = "#333";
    }
});
