/* Check screen width */
const isMobile = () => {
  if (window.screen.width < 670) {
    return true;
  }
  return false;
};

/* Selecting the page components */
const body = document.body;
const html = document.documentElement;
const toUpBtn = document.querySelector("#to-up-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const navList = document.querySelector(".nav-mobile");
const navLinks = document.querySelectorAll(".nav-mobile .nav-item");
let langMenu = document.querySelector("#lang-menu-desktop");
let selectedLang = document.querySelector("#selected-lang-desktop");
let langList = document.querySelector("#lang-list-desktop");
const lang = document.querySelectorAll(".lang");
if (isMobile()) {
  langMenu = document.querySelector("#lang-menu");
  selectedLang = document.querySelector("#selected-lang");
  langList = document.querySelector("#lang-list");
}

/* Detecting page scroll down */
const scrollFunction = () => {
  if (body.scrollTop > 50 || html.scrollTop > 50) {
    /* Showing the Go To Up button if scroll down */
    toUpBtn.style.visibility = "visible";
    /* Hiding the navbar if scroll down */
    if (navList.classList.contains("active")) {
      toggleMobileMenu();
    }
    return;
  }
  /* Hiding go to up button if in the header */
  toUpBtn.style.visibility = "hidden";
  return;
};
/* Assigning the window scroll function */
window.onscroll = () => scrollFunction();

/* mobile navbar animation */
const animateLinks = () => {
  /* Selecting all links in the navbar menu */
  navLinks.forEach((link, index) => {
    let time = (index / 7) * 0.8;
    /* Setting up the animation function for each link */
    link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinksFade 0.5s ease forwards ${time}s`);
  });
};

/* Open/Close the menu */
const toggleMobileMenu = (event) => {
  animateLinks();
  navList.classList.toggle("active");
  mobileMenu.classList.toggle("active");
};
/* Checking if the mobile menu is displaying */
if (mobileMenu) {
  /* Adding a click event to it */
  mobileMenu.addEventListener("click", toggleMobileMenu);
}

/* Changing Language */
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
