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
