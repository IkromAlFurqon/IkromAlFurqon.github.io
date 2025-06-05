var typed = new Typed(".typed-text", {
    strings: [
        "Web Developer",
        "Automation Engineer",
        "Data Enthusiast",
        "Python Programmer",
        "Excel & Power BI User"
      ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

const cards = document.querySelectorAll('.journey-card');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.modal .close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
