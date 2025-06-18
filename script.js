// Smooth scrolling with progress indication
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        updateTimeline(this.getAttribute('href').substring(1));
    });
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add scroll-based animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .exp-card, .edu-card').forEach((el) => observer.observe(el));

// Dark mode toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Timeline navigation
function updateTimeline(currentSection) {
    document.querySelectorAll('.timeline-dot').forEach(dot => {
        dot.classList.remove('active');
        if (dot.dataset.section === currentSection) {
            dot.classList.add('active');
        }
    });
}

document.querySelectorAll('.timeline-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        const section = document.getElementById(dot.dataset.section);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Update timeline on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            updateTimeline(section.id);
        }
    });
});



// Typewriter Effect
window.addEventListener('load', function() {
    const texts = [
        'Frontend Developer 💻',
        'UI/UX Enthusiast 🎨',
        'Problem Solver 🧩',
        'Creative Coder ✨'
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typedTextElement = document.querySelector('.typed-text');
    
    function type() {
        const currentText = texts[currentTextIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentText.slice(0, currentCharIndex);
            currentCharIndex--;
            
            if (currentCharIndex < 0) {
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                setTimeout(type, 500); // Delay before starting new word
                return;
            }
        } else {
            typedTextElement.textContent = currentText.slice(0, currentCharIndex + 1);
            currentCharIndex++;
            
            if (currentCharIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Wait before starting to delete
                return;
            }
        }
        
        const delay = isDeleting ? 50 : 100;
        setTimeout(type, delay);
    }
    
    // Start the typing effect
    if (typedTextElement) {
        type();
    }
});

// Contact button click handler
document.querySelector('.contact-btn').addEventListener('click', function() {
    const phoneNumber = '+91 8826803446';
    this.innerHTML = `<i class="fas fa-phone"></i> ${phoneNumber}`;
    this.style.width = 'auto';
});

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Setup initial state
});