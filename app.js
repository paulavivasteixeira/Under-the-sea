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


const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
