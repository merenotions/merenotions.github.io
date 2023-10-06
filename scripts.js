function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkVisibility() {
    var fadeInElement = document.querySelector('.fade-in');
    if (isElementInViewport(fadeInElement)) {
        fadeInElement.classList.add('visible');
    }
}

// Check on load and on scroll
window.addEventListener('load', checkVisibility);
window.addEventListener('scroll', checkVisibility);
