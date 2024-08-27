
// Hamburger Menu Script
(function() {
// Select the hamburger and the nav links container
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Add an event listener to the hamburger menu
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the nav links container
    navLinks.classList.toggle('active');
});
})(); 