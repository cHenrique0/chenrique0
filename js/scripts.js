/* Changing the navbar background if scroll down */

const body = document.body;
const html = document.documentElement;
const topNavBar = document.querySelector("#nav-top");

const scrollFunction = () => {
  if (body.scrollTop > 50 || html.scrollTop > 50) {
    topNavBar.style.backgroundColor = "#1d1e1f";
    topNavBar.style.boxShadow = "-0.1rem 0.1rem 0.5rem 0.1rem #000";
    return;
  }
  topNavBar.style.background = "none";
  topNavBar.style.boxShadow = "none";
  return;
};

// window.onscroll = () => scrollFunction();

/* Open Navbar menu */
const mobileMenu = document.querySelector(".mobile-menu");
const navList = document.querySelector(".nav-mobile");
const navLinks = document.querySelectorAll(".nav-mobile .nav-item");

const animateLinks = () => {
  navLinks.forEach((link, index) => {
    let time = (index / 7) * 0.8;
    link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinksFade 0.5s ease forwards ${time}s`);
    link.addEventListener("click", toggleMobileMenu);
  });
};

const toggleMobileMenu = (event) => {
  navList.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  animateLinks();
};

if (mobileMenu) {
  mobileMenu.addEventListener("click", toggleMobileMenu);
}
