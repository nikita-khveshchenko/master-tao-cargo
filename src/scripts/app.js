import "swiper/css";
import "../styles/index.css";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

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