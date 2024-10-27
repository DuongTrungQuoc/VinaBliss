const menuOpenButton = document.querySelector("#menu-open-button");
const menuClosenButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu")
});
// Close menu when the close button is clicked
menuClosenButton.addEventListener("click", () => menuOpenButton.click());

function scrollToMenu() {
  const menuSection = document.getElementById('menu');
  menuSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}
// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoint
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
document.querySelector(".contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn hành động submit mặc định

  // Kiểm tra nếu form hợp lệ
  if (this.checkValidity()) {
    window.location.href = "thankyou/thankyou.html"; // Chuyển hướng khi form hợp lệ
  } else {
    // Nếu form không hợp lệ, hiện thông báo lỗi mặc định của HTML5
    this.reportValidity();
  }
});

