// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Contact form (front-end only: no data is sent anywhere)
const form = document.querySelector('.contact-form');
const status = document.querySelector('.form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Please fill in all fields with a valid email.';
    return;
  }
  const name = form.elements.name.value.trim();
  status.textContent = `Thanks, ${name}! Your message has been received.`;
  form.reset();
});
