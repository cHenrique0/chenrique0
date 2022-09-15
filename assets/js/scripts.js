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
const toUpBtn = document.querySelector("#to-up-btn");

const scrollFunction = () => {
  if (body.scrollTop > 50 || html.scrollTop > 50) {
    toUpBtn.style.visibility = "visible";
    topNavBar.style.backgroundColor = "#23232e";
    topNavBar.style.boxShadow = "0 1px 10px rgba(0, 0, 0, 1)";
    topNavBar.style.borderBottom = "1px solid #47475e";
    if (navList.classList.contains("active")) {
      toggleMobileMenu();
    }
    return;
  }
  topNavBar.style.background = "none";
  topNavBar.style.boxShadow = "none";
  topNavBar.style.borderBottom = "none";
  toUpBtn.style.visibility = "hidden";
  return;
};

window.onscroll = () => scrollFunction();

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
  animateLinks();
  navList.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  if (navList.classList.contains("active")) {
    topNavBar.style.backgroundColor = "#23232e";
    topNavBar.style.boxShadow = "0 1px 10px rgba(0, 0, 0, 1)";
    topNavBar.style.borderBottom = "1px solid #47475e";
  } else {
    topNavBar.style.background = "none";
    topNavBar.style.boxShadow = "none";
    topNavBar.style.borderBottom = "none";
  }
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

let currentLang = undefined;

/* Handle click for the changeLang function */
const handleClickLang = (event) => {
  const lang = event.target.id;
  /* Checking if is a mobile device to change the text for the selected language */
  if (isMobile()) {
    selectedLang.innerText = lang;
  }
  /* Changing the class to show the correct flag */
  selectedLang.classList.toggle(currentLang);
  selectedLang.classList.toggle(lang);
};

/* Adding a click event for all languages options */
const changeLang = (event) => {
  lang.forEach((langItem) => {
    langItem.addEventListener("click", handleClickLang);
  });
};

/* Handle click when clicking langMenu  */
const toggleLangList = (event) => {
  /* Checking the current language */
  currentLang = selectedLang.classList[1];
  /* Adding slides animation */
  if (langList.classList.contains("slide-up")) {
    langList.classList.remove("slide-up");
    langList.classList.add("slide-down");
  } else {
    langList.classList.remove("slide-down");
    langList.classList.add("slide-up");
  }

  changeLang();
};

/* Adding a click event to show the language list */
langMenu.addEventListener("click", toggleLangList);
