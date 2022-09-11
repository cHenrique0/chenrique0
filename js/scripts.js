/* Changing the navbar background if scroll down */

const body = document.body;
const html = document.documentElement;
const topNavBar = document.querySelector("#top-nav-bar");

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

window.onscroll = () => scrollFunction();
