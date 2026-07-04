// Countdown Timer
function updateCountdown() {
  // Target date: Saturday, August 29, 2026
  const targetDate = new Date('2026-08-29T00:00:00').getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    // Event has passed
    document.getElementById('days').textContent = '000';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update HTML
  document.getElementById('days').textContent = String(days).padStart(3, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();