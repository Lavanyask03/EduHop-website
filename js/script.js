// hamburger menu
const hamburger = document.getElementById('hamburger');
const body = document.querySelector('body');

// toggle the "show" class
hamburger.addEventListener("click", () => {
    body.classList.toggle('show');
})