const navbar = document.querySelector(".navbar");
const hamgurger = document.querySelector(".humburger");
const navLinks = document.querySelector(".nav-links");
const navLinksli = document.querySelectorAll(".navbar .nav-links li");
window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
hamgurger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamgurger.classList.toggle("active");
});
console.log(navLinksli);
navLinksli.forEach((li) =>
  li.addEventListener("click", () => {
    navLinksli.forEach((li) => li.classList.remove("active"));
    li.classList.add("active");
    hamgurger.classList.remove("active");
    navLinks.classList.remove("active");
  })
);
// typed js

var options = {
  strings: ["Creative Agency."],
  typeSpeed: 200,
  loop: true,
  loopCount: Infinity,
  fadeOut: true,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500,
};

var typed = new Typed("#hero-typed", options);
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
