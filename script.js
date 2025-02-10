// Toggle Dark Mode
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
document.body.prepend(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Add dark mode styles in CSS
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background-color: #333;
        color: #f4f4f4;
    }
    .dark-mode a {
        color: #1e90ff;
    }
`;
document.head.appendChild(style);