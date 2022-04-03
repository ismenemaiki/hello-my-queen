import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
import SwiperCore, { Keyboard } from "swiper";

SwiperCore.use([Navigation, Pagination, Keyboard]);

new Swiper('.swiper', {
  modules: [ Navigation, Pagination ],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
