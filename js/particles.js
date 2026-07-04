// Particles Animation
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle class
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.color = Math.random() > 0.5 ? 'rgba(255, 215, 120, ' : 'rgba(184, 138, 44, ';
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  }

  draw() {
    ctx.fillStyle = this.color + this.opacity + ')';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Create particles
const particles = [];
for (let i = 0; i < 50; i++) {
  particles.push(new Particle());
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let particle of particles) {
    particle.update();
    particle.draw();
  }
  
  requestAnimationFrame(animate);
}

animate();

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});