const themeToggle = document.getElementById('toggleIcon');
const body = document.body;
const toggleCircle = document.querySelector('.toggle-circle');
const headings = document.querySelectorAll('h1, h2, h3, h4');
const toggleIcon = document.querySelector('.toggle-icon');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    toggleCircle.classList.toggle('active');
    toggleIcon.classList.toggle('light-mode-toggle');
    
    headings.forEach(heading => {
        heading.classList.toggle('light-text');
    });
});
