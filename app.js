// Animation on scroll for sections
const sections = document.querySelectorAll('.about, .contact, .map');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;

  sections.forEach((section) => {
    if (section.offsetTop < scrollPosition - 50) {
      section.classList.add('visible');
    }
  });
});

// Contact button action
const contactButton = document.querySelector('.contact-button');

contactButton.addEventListener('click', () => {
  alert('Thank you for contacting us! We will get back to you shortly.');
});
// Bouton Scroll to Top
const scrollTopButton = document.getElementById("scrollTopButton");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
});

scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// Bascule entre le mode sombre et clair
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeIcon.classList.toggle('fa-sun', !isDarkMode);
    themeIcon.classList.toggle('fa-moon', isDarkMode);
});
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(() => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${100 * currentSlide}%)`;
  });
  currentSlide = (currentSlide + 1) % slides.length;
}, 3000);
const animateCounter = (id, endValue) => {
    let startValue = 0;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(endValue / (duration / 50));

    const counter = setInterval(() => {
        startValue += increment;
        document.getElementById(id).innerText = startValue;

        if (startValue >= endValue) {
            document.getElementById(id).innerText = endValue;
            clearInterval(counter);
        }
    }, 50);
};

animateCounter("livesImpacted", 10000);
animateCounter("events", 150);
animateCounter("volunteers", 300);
