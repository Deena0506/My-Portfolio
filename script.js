// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000, // Animation duration
    once: true      // Animate only once
  });

  // Smooth scroll for internal links (in case browser doesn't support scroll-behavior)
  const links = document.querySelectorAll("a[href^='#']");
  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
typedText.innerHTML = `<span style="color: #fb923c;">${current.substring(0, j++)}</span>`;
