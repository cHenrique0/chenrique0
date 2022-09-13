/* Check screen width */
const isMobile = () => {
  if (window.screen.width < 670) {
    return true;
  }
  return false;
};

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

    if (link.getAttribute("id") !== "lang-menu") {
      link.addEventListener("click", toggleMobileMenu);
    }
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

/* Change Language */
let langMenu = document.querySelector("#lang-menu-desktop");
let selectedLang = document.querySelector("#selected-lang-desktop");
let langList = document.querySelector("#lang-list-desktop");
const lang = document.querySelectorAll(".lang");

if (isMobile()) {
  langMenu = document.querySelector("#lang-menu");
  selectedLang = document.querySelector("#selected-lang");
  langList = document.querySelector("#lang-list");
}

let atualFlag = undefined;

const handleClickLang = (event) => {
  const lang = event.target.textContent.trim();
  const flag = event.target.classList[1];
  if (isMobile()) {
    selectedLang.innerText = lang;
  }
  selectedLang.classList.toggle(atualFlag);
  selectedLang.classList.toggle(flag);
};

const changeLang = (event) => {
  lang.forEach((langItem) => {
    langItem.addEventListener("click", handleClickLang);
  });
};

const toggleLangList = (event) => {
  atualFlag = selectedLang.classList[1];
  if (langList.classList.contains("slide-up")) {
    langList.classList.remove("slide-up");
    langList.classList.add("slide-down");
  } else {
    langList.classList.remove("slide-down");
    langList.classList.add("slide-up");
  }
  changeLang();
};

langMenu.addEventListener("click", toggleLangList);
