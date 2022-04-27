import { GaleriaRoutingModule } from './galeria-routing.module';
import { GaleriaComponent } from './galeria.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [ GaleriaComponent ],
  imports: [
    CommonModule,
    GaleriaRoutingModule,
    SwiperModule
  ]
})
export class GaleriaModule { }
