// script.js
document.addEventListener('DOMContentLoaded', function() {

  // AOS Initialization
  AOS.init();

  // Tab Functionality
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Deactivate all buttons and content
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));

          // Activate the clicked button and corresponding content
          button.classList.add('active');
          const tabId = button.getAttribute('data-tab');
          const tabContent = document.getElementById(tabId);
          tabContent.classList.add('active');

          // Trigger AOS refresh to animate the new content
          AOS.refresh();
      });
  });

  // Sticky Navigation (Optional - can be done with CSS `position: sticky` as well)
  window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
          navbar.classList.add('sticky'); // Add a class for sticky styling
      } else {
          navbar.classList.remove('sticky');
      }
  });

});
<!-- AOS Animation -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>

<script>
  window.addEventListener("DOMContentLoaded", function () {

    // AOS Init
    AOS.init({
      duration: 1000,
      once: true
    });

    // COUNTERS
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
      entries.forEach(entry => animateCounter(entry, observer));
    }, counterOptions);

    counters.forEach(counter => counterObserver.observe(counter));

    // TABS
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
      });
    });

    // LIGHTBOX
    const previewImgs = document.querySelectorAll(".preview-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    if (previewImgs.length && lightbox && lightboxImg && closeBtn) {
      previewImgs.forEach(img => {
        img.addEventListener("click", () => {
          lightbox.style.display = "flex";
          lightboxImg.src = img.src;
        });
      });

      closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
      });

      window.addEventListener("click", e => {
        if (e.target === lightbox) {
          lightbox.style.display = "none";
        }
      });
    }

  });
</script>
