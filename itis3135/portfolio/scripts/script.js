function animateOnScroll(selector, threshold = 0.5, delay = 0.2, onEnter = null) {
    const items = document.querySelectorAll(selector);

    // Check for IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
        items.forEach((item) => {
            item.classList.add('in-view');
        });
        return;
    }

    const observer = new IntersectionObserver((entries, observerSelf) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                if (typeof onEnter === 'function') {
                    onEnter(entry.target);
                }
                observerSelf.unobserve(entry.target);
            }
        });
    }, { threshold });

    items.forEach((item, index) => {
        // Set a custom CSS property for transition delay
        item.style.setProperty('--index', index);
        observer.observe(item);
    });
}

// Run on DOM load
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll('.timeline-item');
});









  
