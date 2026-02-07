const swiper = new Swiper(".swiper", { // <- .swiper olmalı
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/* COUPON */
// JS
const boxes = document.querySelectorAll('.box');
const orderBtn = document.getElementById('orderBtn');

// LocalStorage-dən oxu
let progress = JSON.parse(localStorage.getItem('couponProgress')) || 0;
updateCoupon();

// Sifariş verildikdə
orderBtn.addEventListener('click', () => {
  if (progress < 5) {
    progress++;
    localStorage.setItem('couponProgress', progress);
    updateCoupon();
  }

  if (progress === 5) {
    alert('Təbriklər! Siz desert qazandınız 🎁');
    progress = 0; // kupon sıfırlanır
    localStorage.setItem('couponProgress', progress);
    updateCoupon();
  }
});

function updateCoupon() {
  boxes.forEach((box, index) => {
    if (index < progress) box.classList.add('filled');
    else box.classList.remove('filled');
  });
}
