// responsive nav bar

window.addEventListener("load", (event) => {
  const navToggler = document.querySelector(".navToggler");
  const navMenu = document.querySelector(".navBar ul");
  const modal = document.querySelector(".modal");
  const navLinks = document.querySelectorAll(".navBar a");
  const close = document.querySelector(".close");
  // event listeners

  allEventListeners();
  showUpModal();

  // functions of all event listeners
  function allEventListeners() {
    navToggler.addEventListener("click", togglerClick);
    navLinks.forEach((link) => link.addEventListener("click", navLinkClick));
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

  function showUpModal() {
    modal.classList.add("show");
  }

  close.addEventListener("click", (event) => {
    modal.classList.remove("show");
  });
});
