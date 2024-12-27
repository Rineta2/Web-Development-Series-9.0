// Loading Animation
const loadingScreen = document.querySelector(".loading-screen");

// Create master timeline
const masterTl = gsap.timeline();

// Create loading timeline
const loadingTl = gsap.timeline();
// Create content timeline
const contentTl = gsap.timeline({ paused: true }); // Pause content timeline initially

// Loading animation
loadingTl
  .to(".circle", {
    duration: 1.5,
    strokeDashoffset: 0,
    ease: "power2.inOut",
  })
  .from(
    ".loading-credit",
    {
      duration: 0.5,
      opacity: 0,
      y: 10,
      ease: "power2.out",
    },
    "-=1"
  )
  .to(".loading-screen", {
    duration: 0.8,
    opacity: 0,
    ease: "power2.inOut",
    onComplete: () => {
      loadingScreen.style.display = "none";
      // Start content animation after loading screen is hidden
      contentTl.play();
    },
  });

// Content animations
contentTl
  .from(".profile", {
    duration: 0.8,
    opacity: 0,
    x: -50,
    ease: "power2.out",
  })
  .from(
    ".nav__list",
    {
      duration: 0.6,
      opacity: 0,
      y: -30,
      ease: "power2.out",
    },
    "-=0.4"
  )
  .from(
    ".nav__actions",
    {
      duration: 0.6,
      opacity: 0,
      x: 30,
      ease: "power2.out",
    },
    "-=0.4"
  )
  .from(
    ".home__title",
    {
      duration: 0.8,
      opacity: 0,
      y: 50,
      ease: "power2.out",
    },
    "-=0.2"
  )
  .from(
    ".home__description",
    {
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: "power2.out",
    },
    "-=0.6"
  )
  .from(
    ".btn .primary",
    {
      duration: 0.6,
      opacity: 0,
      y: 30,
      ease: "power2.out",
    },
    "-=0.4"
  )
  .from(
    ".home .img",
    {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
    },
    "-=0.4"
  );

// Start loading animation
loadingTl.play();

// Initialize ScrollReveal after content animation
contentTl.eventCallback("onComplete", () => {
  initScrollReveal();
});

// Modify ScrollReveal initialization
function initScrollReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000, // Slightly faster
    delay: 200, // Reduced delay
  });

  // Services section
  sr.reveal(".services .heading", {
    delay: 100,
    distance: "40px",
  });
  sr.reveal(".services .box", {
    delay: 200,
    origin: "bottom",
    interval: 100,
  });

  // Leading, Apps, Testimonials sections
  sr.reveal(".leading .img", {
    origin: "left",
    delay: 100,
  });
  sr.reveal(".leading .text", {
    origin: "right",
    delay: 200,
  });
  sr.reveal(".apps .text", {
    origin: "left",
    delay: 100,
  });
  sr.reveal(".apps .img", {
    origin: "right",
    delay: 200,
  });
  sr.reveal(".testimonials .box", {
    delay: 100,
    distance: "30px",
  });

  // Article
  sr.reveal(".article .heading", {
    delay: 100,
    distance: "40px",
  });
  sr.reveal(".article .box", {
    delay: 200,
    origin: "bottom",
    interval: 100,
  });

  // Footer
  sr.reveal("footer .img", {
    origin: "left",
    delay: 100,
  });
  sr.reveal("footer .footer__list", {
    delay: 200,
    origin: "bottom",
    interval: 100,
  });
  sr.reveal("footer .top", {
    delay: 300,
    origin: "left",
  });
  sr.reveal("footer .bottom", {
    delay: 300,
    origin: "right",
  });
}

const navMenu = document.querySelector(".nav__list");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

// Show menu
hamburger.addEventListener("click", () => {
  navMenu.classList.add("open");
});

// Hide menu
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("open");
});

// Hide menu when clicking on nav links
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});
