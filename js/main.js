// Main JavaScript

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add some interactivity to cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) scale(1.05)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Console message
console.log('%cOHDM - Orchestre d\'Harmonie Départemental de la Mayenne', 'color: #b88a2c; font-size: 16px; font-weight: bold;');
console.log('%cBienvenue!', 'color: #e7c86b; font-size: 14px;');