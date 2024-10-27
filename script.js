const menuOpenButton = document.querySelector("#menu-open-button");
const menuClosenButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu")
});
// Close menu when the close button is clicked
menuClosenButton.addEventListener("click", () => menuOpenButton.click());

