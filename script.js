// Smooth scroll to sections
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Form validation (basic)
document.querySelector("form").addEventListener("submit", function (e) {
  const inputs = this.querySelectorAll("input, textarea");
  let valid = true;
  inputs.forEach(input => {
    if (input.value.trim() === "") {
      input.style.borderColor = "red";
      valid = false;
    } else {
      input.style.borderColor = "#00f2fe";
    }
  });
  if (!valid) {
    e.preventDefault();
    alert("Please fill out all fields.");
  }
});

// Email handler
function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const subject = `Message from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
  window.location.href = `mailto:deenadhayal0705@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
}
