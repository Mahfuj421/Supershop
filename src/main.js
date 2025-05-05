import './style.scss'
import './main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    575: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2.1,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
  },
});

function getNextTargetDate() {
  const now = new Date();
  const currentDate = now.getDate();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  let targetDay;
  let targetMonth = currentMonth;
  let targetYear = currentYear;

  if (currentDate < 15) {
    targetDay = 15;
  } else if (currentDate >= 15 && currentDate < 30) {
    targetDay = 30;
  } else {
    targetDay = 15;
    targetMonth += 1;
    if (targetMonth > 11) {
      targetMonth = 0;
      targetYear += 1;
    }
  }

  return new Date(targetYear, targetMonth, targetDay, 0, 0, 0);
}

function updateTimer() {
  const now = new Date();
  const targetDate = getNextTargetDate();
  const timeDiff = targetDate - now;

  if (timeDiff <= 0) {
    setTimeout(updateTimer, 1000);
    return;
  }

  const seconds = Math.floor((timeDiff / 1000) % 60);
  const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  document.querySelector(".day-val").textContent = String(days).padStart(2, "0");
  document.querySelector(".hour-val").textContent = String(hours).padStart(2, "0");
  document.querySelector(".minute-val").textContent = String(minutes).padStart(2, "0");
  document.querySelector(".second-val").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateTimer, 1000);
updateTimer(); // initial call
