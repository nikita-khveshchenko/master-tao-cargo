import "swiper/css";
import "../styles/index.css";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import BurgerMenu from "./modules/BurgerMenu";

new BurgerMenu();

const heroSlider = new Swiper(".slider", {
  modules: [Pagination, Navigation],
  spaceBetween: 20, // расстояние между слайдами
  slidesPerView: 1, // сколько отображается слайдов
  direction: "horizontal",
  speed: 800,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next"
  }
});

const deliverySwiper = new Swiper(".delivery__swiper", {
  modules: [Navigation, Pagination],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1340: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  direction: "horizontal",
    navigation: {
    prevEl: ".delivery__swiper-button-prev",
    nextEl: ".delivery__swiper-button-next"
  },
  pagination: {
    el: ".delivery__swiper-pagination",
    clickable: true
  }
})