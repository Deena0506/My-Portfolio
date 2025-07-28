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

// Back to Top button functionality
const backToTopBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
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
 window.location.href = `mailto:deenadhayal0705@gmail.com?subject=...`;
