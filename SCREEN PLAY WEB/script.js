// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add download button functionality
document.querySelectorAll('.btn-download').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const os = this.closest('.download-card').querySelector('h3').textContent;
        alert(`Download link for ${os} would be here.\n\nFor now, replace # with your actual download URL.`);
        
        // In real implementation, you would:
        // window.location.href = 'your-actual-download-url';
    });
});

// Update year in footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('footer p:first-child');
    if(yearSpan) {
        yearSpan.innerHTML = `&copy; ${new Date().getFullYear()} Your Software Name. All rights reserved.`;
    }
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(card);
    });
});