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


// index page
// add categories using javascript
const categories = ['Photography','Business','Art','Programming','Design','Music','Cooking','Law','Dance'];
const categoriesEl = document.getElementById('categories');

// map through categories array amd create a category element for each one
categories.map((category) => {
    let catEl = document.createElement('div');
    catEl.innerHTML = `<div class="card category">
                        <img src="images/categories/${category.toLowerCase()}.jpg" alt="">
                        <h3>${category}</h3>
                      </div>`;
    // append catEl to categoriesEl
    categoriesEl.appendChild(catEl);
})

// index page
// student reviews carousel
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}