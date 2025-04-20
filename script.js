document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav");
  const section1 = document.querySelector(".section1");
  const initialCoords = section1?.getBoundingClientRect();

  window.addEventListener("scroll", function () {
    if (window.scrollY > initialCoords.top) nav?.classList.add("sticky");
    else nav?.classList.remove("sticky");
  });

  // Modal Functionality
  const modal = document.querySelector(".Modal");
  const overlay = document.querySelector(".overlay");
  const btnCloseModal = document.querySelector(".close-modal");
  const btnClose = document.querySelector(".close-modal-second");
  const btnOpenModal = document.querySelectorAll(".show-modal");
  const modalSecond = document.querySelector(".Modal-Second");
  const btnModal = document.querySelectorAll(".show-modal-Second");

  const closeModal = () => {
    modal?.classList.add("hidden");
    overlay?.classList.add("hidden");
  };

  const openModal = (e) => {
    e.preventDefault();
    modal?.classList.remove("hidden");
    overlay?.classList.remove("hidden");
  };

  const openModal2 = (e) => {
    e.preventDefault();
    modalSecond?.classList.remove("hidden");
    overlay?.classList.remove("hidden");
  };

  const closeModal2 = () => {
    modalSecond?.classList.add("hidden");
    overlay?.classList.add("hidden");
  };

  btnOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
  btnModal.forEach((btn) => btn.addEventListener("click", openModal2));

  btnCloseModal?.addEventListener("click", closeModal);
  btnClose?.addEventListener("click", closeModal2);
  overlay?.addEventListener("click", () => {
    closeModal();
    closeModal2();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal?.classList.contains("hidden")) {
      closeModal();
    }
  });
});
