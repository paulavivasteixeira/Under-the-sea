// responsive nav bar

window.addEventListener("load", (event) => {
  const navToggler = document.querySelector(".navToggler");
  const navMenu = document.querySelector(".navBar ul");

  const navLinks = document.querySelectorAll(".navBar a");
  // event listeners

  allEventListeners();

  // functions of all event listeners
  function allEventListeners() {
    navToggler.addEventListener("click", togglerClick);
    navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
  }

  function togglerClick() {
    navToggler.classList.toggle("togglerOpen");
    navMenu.classList.toggle("open");
  }

  function navLinkClick() {
    if (navMenu.classList.contains("open")) {
      navToggler.click();
    }
  }
});
