document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const navDropdown = document.getElementById("nav-dropdown");

    menuToggle.addEventListener("click", function () {
        navDropdown.classList.toggle("show");
        menuToggle.classList.toggle("hidden");
        menuClose.classList.toggle("hidden");
    });

    menuClose.addEventListener("click", function () {
        navDropdown.classList.toggle("show");
        menuToggle.classList.toggle("hidden");
        menuClose.classList.toggle("hidden");
    });
});