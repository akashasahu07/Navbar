const toggleBtn = document.querySelector('.toggleBtn');
const links = document.querySelector('.links');
const nav = document.querySelector('nav');

toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    links.classList.toggle('active');
});

// Close links when clicking outside the nav
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
        links.classList.remove('active');
    }
});
