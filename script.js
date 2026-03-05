// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.5)";
    } else {
        navbar.style.boxShadow = "none";
    }
});