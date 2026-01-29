const openPopup = document.querySelector(".openPopup");
const popupContainer = document.querySelector(".popup-container");
const closeIcon = document.querySelector(".close-icon");
const overlay = document.querySelector(".overlay");
const left = document.querySelector(".left");

openPopup.addEventListener("click", () => {
  popupContainer.classList.add("popup-open");
});

closeIcon.addEventListener("click", () => {
  popupContainer.classList.remove("popup-open");
});

overlay.addEventListener("click", () => {
  popupContainer.classList.remove("popup-open");
});

left.addEventListener("click", () => {
  popupContainer.classList.remove("popup-open");
});

// openPopup.addEventListener("click", () => {
//   popup.classList.remove("popup");
// });
