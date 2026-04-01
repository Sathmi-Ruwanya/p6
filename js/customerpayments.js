// document.addEventListener('DOMContentLoaded', () => {
    let container = document.getElementById("paytxt");
    let icons = document.getElementsByClassName("arrowicon");

    container.addEventListener('mouseenter', () => {
        for (let icon of icons) {
            icon.style.display = 'inline';
        }
    });

    container.addEventListener('mouseleave', () => {
        for (let icon of icons) {
            icon.style.display = 'none';
        }
    });

