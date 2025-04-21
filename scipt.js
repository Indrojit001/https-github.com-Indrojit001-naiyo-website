// script.js

document.addEventListener("DOMContentLoaded", function () {
  // ====== AOS Initialization ======
  AOS.init({
    duration: 1000,
    once: true,
  });

  // ====== Tab Functionality ======
  const tabButtons = document.querySelectorAll(".tab-button, .tab-btn"); // support both classes
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to current
      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      const tabContent = document.getElementById(tabId);
      if (tabContent) tabContent.classList.add("active");

      // Refresh AOS to animate the new content
      AOS.refresh();
    });
  });

  // ====== Counter Animation ======
  const counters = document.querySelectorAll(".counter");
  const counterOptions = { threshold: 0.5 };

  const animateCounter = (entry, observer) => {
    if (entry.isIntersecting) {
      const target = +entry.target.getAttribute("data-target");
      let count = 0;
      const speed = target / 100;

      const update = () => {
        count += speed;
        if (count < target) {
          entry.target.innerText = Math.ceil(count);
          requestAnimationFrame(update);
        } else {
          entry.target.innerText = target;
        }
      };

      update();
      observer.unobserve(entry.target);
    }
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => animateCounter(entry, observer));
  }, counterOptions);

  counters.forEach((counter) => counterObserver.observe(counter));

  // ====== Lightbox Preview ======
  const previewImgs = document.querySelectorAll(".preview-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  if (previewImgs.length && lightbox && lightboxImg && closeBtn) {
    previewImgs.forEach((img) => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });

    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }

  // ====== Sticky Navbar ======
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });
  }
});
