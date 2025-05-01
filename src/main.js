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
    // when window width is >= 320px
    // when window width is >= 576px
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
