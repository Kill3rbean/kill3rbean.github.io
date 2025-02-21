// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Services Slider
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slideIndex = 0;
const slideWidth = document.querySelector('.slide').offsetWidth + 20; // Gap included

function slide(direction) {
    slideIndex += direction;
    const slides = document.querySelectorAll('.slide').length;
    if (slideIndex < 0) slideIndex = slides - 1;
    if (slideIndex >= slides) slideIndex = 0;
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    slider.style.transition = 'transform 0.5s ease';
}

prevButton.addEventListener('click', () => slide(-1));
nextButton.addEventListener('click', () => slide(1));

// Auto-slide every 5 seconds
setInterval(() => slide(1), 5000);

// Contact Form Submission with Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('form-status');

    if (!name || !email || !message) {
        status.textContent = 'Please fill in all fields.';
        status.style.color = '#ff0000';
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        status.textContent = 'Please enter a valid email address.';
        status.style.color = '#ff0000';
        return;
    }

    // Simulate backend response (no real server needed)
    status.textContent = 'Sending...';
    status.style.color = '#1a237e';

    setTimeout(() => {
        status.textContent = 'Message sent! We’ll respond soon.';
        status.style.color = '#1a237e';
        this.reset();
    }, 1000);
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('fade-in');
        }
    });
});