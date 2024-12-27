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

// Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

// Header
sr.reveal(".profile", { origin: "left" });
sr.reveal(".nav__list", { delay: 500 });
sr.reveal(".nav__actions", { delay: 600, origin: "right" });

// Home
sr.reveal(".home__title");
sr.reveal(".home__description", { delay: 500 });
sr.reveal(".home .btn", { delay: 600 });
sr.reveal(".home .img", { delay: 800, origin: "bottom" });

// Services
sr.reveal(".services .heading");
sr.reveal(".services .box", {
  delay: 600,
  origin: "bottom",
  interval: 100,
});

// Leading, Apps, Testimonials sections
sr.reveal(".leading .img", { origin: "left" });
sr.reveal(".leading .text", { origin: "right" });
sr.reveal(".apps .text", { origin: "left" });
sr.reveal(".apps .img", { origin: "right" });
sr.reveal(".testimonials .box");

// Article
sr.reveal(".article .heading");
sr.reveal(".article .box", {
  delay: 600,
  origin: "bottom",
  interval: 100,
});

// Footer
sr.reveal("footer .img", { origin: "left" });
sr.reveal("footer .footer__list", {
  delay: 500,
  origin: "bottom",
  interval: 100,
});
sr.reveal("footer .top", { delay: 500, origin: "left" });
sr.reveal("footer .bottom", { delay: 500, origin: "right" });
