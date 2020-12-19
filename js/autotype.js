// autotype text animation
const heroText = document.getElementById('hero-text');
const text = "We envision a world where anyone, anywhere has the power to transform their life through learning.";
let index = 1;
let speed = 200;

writeText();

function writeText() {
    heroText.innerText = text.slice(0, index);
    index++;
    // reset index to 1 when we reach the end
    if (index > text.length) {
        index = 1;        
    }
    setTimeout(writeText, speed);
    
}