// Scroll fade-in for sections
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => observer.observe(section));

// Tab title visibility effect
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "👀 Come back to Naiyo24!";
  } else {
    document.title = "Naiyo24 Pvt. Ltd.";
  }
});
