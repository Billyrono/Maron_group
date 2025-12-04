// ========================================
// MARON Real Estate Group - Main JavaScript
// Enhanced with Homepark-inspired transitions
// ========================================

// ========================================
// PRELOADER & PAGE LOAD ANIMATIONS
// ========================================
function triggerPageLoaded() {
  console.log("Triggering page-loaded animations");
  // Add page-loaded class to trigger entrance animations
  document.body.classList.add("page-loaded");
  console.log("page-loaded class added to body");
}

// Trigger preloader exit after 1.5 seconds
setTimeout(function () {
  console.log("Initializing preloader exit");
  triggerPageLoaded();
}, 1500);

// Remove preloader from DOM after animation completes
setTimeout(function () {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.remove();
    console.log("Preloader removed from DOM");
  }
}, 2300);

// ========================================
// PAGE TRANSITION OVERLAY (Navigation)
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  // Create transition overlay if it doesn't exist
  if (!document.querySelector(".transition-overlay")) {
    const overlay = document.createElement("div");
    overlay.className = "transition-overlay";

    const layer = document.createElement("div");
    layer.className = "layer";
    overlay.appendChild(layer);

    document.body.appendChild(overlay);
  }

  // Intercept all navigation links
  const links = document.querySelectorAll("a[href]");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only trigger transition for internal pages (not # anchors or external links)
      if (
        href &&
        !href.startsWith("#") &&
        !href.startsWith("http") &&
        !href.startsWith("mailto") &&
        !href.startsWith("tel")
      ) {
        e.preventDefault();

        // Activate transition overlay
        const overlay = document.querySelector(".transition-overlay");
        overlay.classList.add("active");

        // Navigate after animation completes
        setTimeout(function () {
          window.location.href = href;
        }, 1300); // Match CSS transition duration + delay
      }
    });
  });
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".links");

if (menuBtn && menuItems) {
  menuBtn.addEventListener("click", function () {
    menuItems.classList.toggle("showlinks");

    // Animate menu icon
    const icon = menuBtn.querySelector("i");
    if (menuItems.classList.contains("showlinks")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!menuBtn.contains(event.target) && !menuItems.contains(event.target)) {
      menuItems.classList.remove("showlinks");
      const icon = menuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
}

// ========================================
// TRANSPARENT NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight) {
      // Scrolled past 100vh (hero image)
      navbar.classList.add("scrolled");
    } else {
      // Still in hero section
      navbar.classList.remove("scrolled");
    }
  });
}

// ========================================
// DYNAMIC COPYRIGHT YEAR
// ========================================
function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  const copyrightElements = document.querySelectorAll(".footer .copyright");

  copyrightElements.forEach((element) => {
    // Replace any year (4 digits) or add current year
    const text = element.innerHTML;
    const yearRegex = /©(\d{4})/;

    if (yearRegex.test(text)) {
      element.innerHTML = text.replace(yearRegex, `©${currentYear}`);
    } else {
      element.innerHTML = text.replace("©", `©${currentYear} `);
    }
  });
}

// Update copyright year on page load
document.addEventListener("DOMContentLoaded", updateCopyrightYear);

// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ========================================
// SCROLL ANIMATIONS (Fade In on Scroll)
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", function () {
  const animateElements = document.querySelectorAll(
    ".house, .contact, .overview, .amenities, .agents, .image"
  );
  animateElements.forEach((element) => {
    observer.observe(element);
  });
});

// ========================================
// FORM VALIDATION
// ========================================
const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    const requiredFields = form.querySelectorAll("[required]");

    // Clear previous error messages
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => msg.remove());

    requiredFields.forEach((field) => {
      // Remove previous error styling
      field.style.borderColor = "";

      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = "#dc3545";

        // Add error message
        const errorMsg = document.createElement("span");
        errorMsg.className = "error-message";
        errorMsg.style.color = "#dc3545";
        errorMsg.style.fontSize = "12px";
        errorMsg.style.display = "block";
        errorMsg.style.marginTop = "-15px";
        errorMsg.style.marginBottom = "10px";
        errorMsg.textContent = "This field is required";

        field.parentNode.insertBefore(errorMsg, field.nextSibling);
      }
    });

    // Email validation
    const emailFields = form.querySelectorAll('input[type="email"]');
    emailFields.forEach((field) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (field.value && !emailRegex.test(field.value)) {
        isValid = false;
        field.style.borderColor = "#dc3545";

        const errorMsg = document.createElement("span");
        errorMsg.className = "error-message";
        errorMsg.style.color = "#dc3545";
        errorMsg.style.fontSize = "12px";
        errorMsg.style.display = "block";
        errorMsg.style.marginTop = "-15px";
        errorMsg.style.marginBottom = "10px";
        errorMsg.textContent = "Please enter a valid email address";

        field.parentNode.insertBefore(errorMsg, field.nextSibling);
      }
    });

    if (isValid) {
      // Form is valid - you can submit to server here
      showSuccessMessage(form);
    }
  });

  // Real-time validation on input
  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (this.value.trim()) {
        this.style.borderColor = "#28a745";
      } else {
        this.style.borderColor = "";
      }
    });
  });
});

// ========================================
// SUCCESS MESSAGE
// ========================================
function showSuccessMessage(form) {
  const successDiv = document.createElement("div");
  successDiv.style.cssText = `
        background-color: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        margin-top: 20px;
        text-align: center;
        font-weight: 600;
        animation: fadeIn 0.3s ease;
    `;
  successDiv.textContent =
    "Thank you! Your message has been sent successfully.";

  form.appendChild(successDiv);

  // Reset form after 2 seconds
  setTimeout(() => {
    form.reset();
    successDiv.remove();

    // Clear any validation styling
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.style.borderColor = "";
    });
  }, 3000);
}

// ========================================
// BUTTON FUNCTIONALITY - Make CTA buttons work
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  // "Learn more" buttons scroll to contact section
  const learnMoreButtons = document.querySelectorAll("button");
  learnMoreButtons.forEach((button) => {
    const buttonText = button.textContent.toLowerCase();

    if (buttonText.includes("learn more") || buttonText.includes("tour")) {
      button.addEventListener("click", function () {
        const contactSection = document.querySelector(".contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    if (buttonText.includes("contact")) {
      button.addEventListener("click", function () {
        window.location.href = "contact.html";
      });
    }
  });
});

// ========================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".links a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.style.fontWeight = "700";
      link.style.textDecoration = "underline";
    }
  });
});

// ========================================
// SOCIAL MEDIA ICON FUNCTIONALITY
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  const socialIcons = document.querySelectorAll(".icons i, .links i");

  socialIcons.forEach((icon) => {
    if (icon.classList.contains("fa-facebook")) {
      icon.addEventListener("click", function () {
        window.open("https://facebook.com", "_blank");
      });
    } else if (icon.classList.contains("fa-twitter")) {
      icon.addEventListener("click", function () {
        window.open("https://twitter.com", "_blank");
      });
    } else if (icon.classList.contains("fa-instagram")) {
      icon.addEventListener("click", function () {
        window.open("https://instagram.com", "_blank");
      });
    }
  });
});

// ========================================
// IMAGE LAZY LOADING (For older browsers)
// ========================================
if ("loading" in HTMLImageElement.prototype) {
  // Browser supports native lazy loading
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.src;
  });
} else {
  // Fallback for older browsers using Intersection Observer
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  const lazyImageObserver = new IntersectionObserver(function (
    entries,
    observer
  ) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.src;
        lazyImage.classList.remove("lazy");
        lazyImageObserver.unobserve(lazyImage);
      }
    });
  });

  lazyImages.forEach(function (lazyImage) {
    lazyImageObserver.observe(lazyImage);
  });
}

// ========================================
// CAROUSEL AUTO-PLAY PAUSE ON HOVER
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    carousel.addEventListener("mouseenter", function () {
      $(this).carousel("pause");
    });

    carousel.addEventListener("mouseleave", function () {
      $(this).carousel("cycle");
    });
  });
});

// ========================================
// PRELOADER (Replaced by Homepark-style load animation)
// ========================================
// Handled by page-loaded class - see top of file

// ========================================
// DARK THEME TOGGLE
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.querySelector(".theme-toggle");

  // Get saved theme or check system preference
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Set initial theme
  if (savedTheme) {
    htmlElement.setAttribute("data-theme", savedTheme);
  } else if (systemPrefersDark) {
    htmlElement.setAttribute("data-theme", "dark");
  }

  // Update toggle button icon
  function updateToggleIcon() {
    if (!themeToggleBtn) return;

    const currentTheme = htmlElement.getAttribute("data-theme");
    const icon = themeToggleBtn.querySelector("i");

    if (currentTheme === "dark") {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  }

  // Toggle theme on button click
  if (themeToggleBtn) {
    updateToggleIcon();

    themeToggleBtn.addEventListener("click", function () {
      const currentTheme = htmlElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      htmlElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateToggleIcon();
    });
  }
});

// ========================================
// TAILWIND CAROUSEL
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  const carouselTrack = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".carousel-btn-prev");
  const nextBtn = document.querySelector(".carousel-btn-next");
  const indicators = document.querySelectorAll(".carousel-indicator");

  if (!carouselTrack) return; // Exit if carousel doesn't exist

  let currentSlide = 0;
  const totalSlides = slides.length;

  function goToSlide(index) {
    currentSlide = index;
    const offset = -currentSlide * 100;
    carouselTrack.style.transform = `translateX(${offset}%)`;

    // Update indicators
    indicators.forEach((indicator, i) => {
      if (i === currentSlide) {
        indicator.classList.remove("bg-white/50");
        indicator.classList.add("bg-primary");
      } else {
        indicator.classList.remove("bg-primary");
        indicator.classList.add("bg-white/50");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
  }

  // Event listeners
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => goToSlide(index));
  });

  // Auto-play carousel
  let autoplayInterval = setInterval(nextSlide, 3000);

  // Pause on hover
  const carouselContainer = document.getElementById("tailwind-carousel");
  if (carouselContainer) {
    carouselContainer.addEventListener("mouseenter", () => {
      clearInterval(autoplayInterval);
    });

    carouselContainer.addEventListener("mouseleave", () => {
      autoplayInterval = setInterval(nextSlide, 3000);
    });
  }
});

// ========================================
// ANIMATED COUNTERS (Scroll-Triggered)
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  const counterCards = document.querySelectorAll(".counter-card");
  let hasAnimated = false;

  function animateCounter(element, target, duration = 1000) {
    const numberElement = element.querySelector(".counter-number");
    const start = 0;
    const increment = target / (duration / 10); // 60 FPS
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        numberElement.textContent = target + "+";
        clearInterval(timer);
      } else {
        numberElement.textContent = Math.floor(current);
      }
    }, 10);
  }

  function resetCounters() {
    counterCards.forEach((card) => {
      const numberElement = card.querySelector(".counter-number");
      numberElement.textContent = "0";
    });
    hasAnimated = false;
  }

  function checkCountersInView() {
    if (counterCards.length === 0) return;

    const firstCounter = counterCards[0];
    const rect = firstCounter.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight * 1.5;

    // Animate when scrolled into view
    if (isInView && !hasAnimated) {
      hasAnimated = true;
      counterCards.forEach((card, index) => {
        const target = parseInt(card.getAttribute("data-target"));
        setTimeout(() => {
          animateCounter(card, target);
        }, index * 100);
      });
    }

    // Reset when scrolled away
    if (!isInView && hasAnimated) {
      const farAway = rect.bottom < -200 || rect.top > window.innerHeight + 200;
      if (farAway) {
        resetCounters();
      }
    }
  }

  // Check on scroll
  window.addEventListener("scroll", checkCountersInView);
  // Check initially
  checkCountersInView();
});

// ========================================
// FOOTER ANIMATION (Scroll-Triggered)
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".footer");

  if (!footer) return;

  const footerAbout = footer.querySelector(".footer-about");
  const footerLinks = footer.querySelectorAll(".footer-links");
  const footerContact = footer.querySelector(".footer-contact");
  const footerBottom = footer.querySelector(".footer-bottom");

  // Create intersection observer for footer
  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animations when footer comes into view
          setTimeout(() => {
            if (footerAbout) footerAbout.classList.add("animate");
          }, 100);

          setTimeout(() => {
            footerLinks.forEach((link) => link.classList.add("animate"));
          }, 300);

          setTimeout(() => {
            if (footerContact) footerContact.classList.add("animate");
          }, 500);

          setTimeout(() => {
            if (footerBottom) footerBottom.classList.add("animate");
          }, 700);

          // Unobserve after animation is triggered
          footerObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of footer is visible
      rootMargin: "0px 0px -50px 0px", // Trigger slightly before footer is fully visible
    }
  );

  // Observe the footer
  footerObserver.observe(footer);
});
