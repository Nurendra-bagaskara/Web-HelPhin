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

const navbar = document.querySelector('.navbar');
const teamSection = document.getElementById('team');

// Fungsi untuk memeriksa posisi scroll
function onScroll() {
  const teamSectionTop = teamSection.getBoundingClientRect().top;
  const navbarHeight = navbar ? navbar.offsetHeight : 0; // Gunakan 0 jika navbar tidak ada

  // Jika bagian atas section team berada di bawah navbar, ubah background navbar
  if (navbar && teamSectionTop <= navbarHeight) {
    navbar.classList.add('active');
  } else if (navbar) {
    navbar.classList.remove('active');
  }
}

// Tambahkan event listener pada scroll
window.addEventListener('scroll', onScroll);

