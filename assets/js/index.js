const mobileNavTrigger = document.querySelector("#mobile-nav-trigger");
const mobileNav = document.querySelector("#mobile-nav");

mobileNavTrigger.addEventListener("click", () =>
  mobileNav.classList.toggle("-translate-x-full")
);
window.addEventListener(
  "resize",
  () => window.innerWidth >= 640 && mobileNav.classList.add("-translate-x-full")
);

const headerLogo = document.querySelector("#header-logo");
const aboutSection = document.querySelector("#about");
if (headerLogo) {
  window.addEventListener("scroll", () => {
    headerLogo.classList.toggle("opacity-0", window.scrollY < aboutSection.offsetTop - 300);
  });
}

