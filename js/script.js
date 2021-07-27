// hamburger menu
const hamburger = document.getElementById('hamburger');
const body = document.querySelector('body');

// toggle the "show" class
hamburger.addEventListener("click", () => {
    body.classList.toggle('show');
})

// login modal
const loginBtn = document.getElementById('login');
const closeBtn = document.getElementById('close');
const modalEl = document.getElementById('modal');

loginBtn.addEventListener("click", () => {
    modalEl.classList.toggle('show-modal');
})

closeBtn.addEventListener("click", () => {
    modalEl.classList.remove('show-modal');
})