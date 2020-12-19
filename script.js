const hamburger = document.getElementById('hamburger');
const nav_ul = document.getElementById('nav-ul');

// toggle the "show" class
hamburger.addEventListener("click", () => {
    nav_ul.classList.toggle('show');
})