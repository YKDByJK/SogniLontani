// Smooth scrolling when clicking the navigation buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change header background color when scrolling
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#333'; // Darker shade on scroll
    } else {
        header.style.backgroundColor = '#1a1a1a'; // Default color
    }
});

// Add button animation when clicked
const buttons = document.querySelectorAll('.nav-button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });
});
