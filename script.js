// Contact form submission with basic validation and feedback
function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate sending email (you can integrate EmailJS or backend here)
  alert("Thank you, " + name + "! Your message has been sent.");
  document.getElementById("contact-form").reset();
}

// Smooth scroll for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
// ===== Scroll Reveal Effect (using Intersection Observer) =====
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.2
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("reveal-visible");
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach(section => {
  section.classList.add("reveal");
  revealOnScroll.observe(section);
});

// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===== Optional: Toggle Nav Menu (Mobile) =====
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
const typeText = ["Web Developer", "UI Designer", "Content Creator"];
let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;

(function type() {
  const typedElement = document.querySelector(".typed-text");

  if (count === typeText.length) count = 0;
  currentText = typeText[count];

  if (isDeleting) {
    index--;
    typedElement.textContent = currentText.substring(0, index);
  } else {
    index++;
    typedElement.textContent = currentText.substring(0, index);
  }

  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && index === currentText.length) {
    typingSpeed = 1200; // pause at full word
    isDeleting = true;
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    count++;
    typingSpeed = 400;
  }

  setTimeout(type, typingSpeed);
})();
