document.addEventListener("DOMContentLoaded", function () { const statsContainer = document.getElementById("stats-container"); const toggleButton = document.getElementById("toggle-stats");

toggleButton.addEventListener("click", function () {
    if (statsContainer.style.display === "none") {
        statsContainer.style.display = "block";
        toggleButton.textContent = "Hide Statistics";
    } else {
        statsContainer.style.display = "none";
        toggleButton.textContent = "Show Statistics";
    }
});});

