//script for slideshow allows user to click through photots
const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let current = 0;

function showSlide(index){
    slides.forEach((slide,i) => {
        slide.classList.toggle('active-slide', i ===index);

    });
}
function nextSlide(){
    current =(current+1) % slides.length;
    showSlide(current);
}
function prevSlide(){
    current = (current -1 + slides.length)%slides.length;
    showSlide(current);  
}
nextButton.addEventListener('click',nextSlide);
prevButton.addEventListener('click',prevSlide);
//auto-play every 5 seconds 
setInterval(nextSlide,5000);
showSlide(current);