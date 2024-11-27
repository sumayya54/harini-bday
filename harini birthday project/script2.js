let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].classList.add('active');
}

setInterval(changeSlide, 3000); // Change slide every 3 seconds

// Initialize first slide to be visible
slides[currentIndex].classList.add('active');
