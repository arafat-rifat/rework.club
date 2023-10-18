"use strict";
/*
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
*/
// window.addEventListener("scroll", function (e) {
//   console.log(window.scrollY);
// });

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav");
  const section1 = document.querySelector(".section1");
  const initialCoords = section1.getBoundingClientRect();
  console.log(initialCoords);

  window.addEventListener("scroll", function () {
    console.log(window.scrollY);

    if (this.window.scrollY > initialCoords.top) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Modal Functionality
  const modal = document.querySelector(".Modal");
  const overlay = document.querySelector(".overlay");
  const btnCloseModal = document.querySelector(".close-modal");
  const btnClose = document.querySelector(".close-modal-second");
  const btnOpenModal = document.querySelector(".show-modal");
  console.log(btnOpenModal);
  const modalSecond = document.querySelector(".Modal-Second");
  const btnModal = document.querySelectorAll(".show-modal-Second");

  // For Log in
  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    // document.body.style.overflow = "auto";
  };

  const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    // document.body.style.overflow = "hidden";
  };

  // For SignUp
  const openModal2 = function (e) {
    e.preventDefault();
    modalSecond.classList.remove("hidden");
    overlay.classList.remove("hidden");
    // document.body.style.overflow = "hidden";
  };

  const closeModal2 = function () {
    modalSecond.classList.add("hidden");
    overlay.classList.add("hidden");
    // document.body.style.overflow = "auto";
  };

  btnModal.forEach((btn) => btn.addEventListener("click", openModal2));

  btnOpenModal.addEventListener("click", openModal);

  // for (let i = 0; i < btnOpenModal.length; i++)
  //   btnOpenModal[i].addEventListener("click", openModal);

  btnCloseModal.addEventListener("click", closeModal);
  btnClose.addEventListener("click", closeModal2);
  overlay.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal2);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
});
