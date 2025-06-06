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

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-button");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
  observer.observe(el);
});

function toggleNavbar() {
  const menu = document.querySelector('.navbar-button-container');
  menu.classList.toggle('show');
}