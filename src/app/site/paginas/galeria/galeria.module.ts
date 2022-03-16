import { GaleriaRoutingModule } from './galeria-routing.module';
import { GaleriaComponent } from './galeria.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ GaleriaComponent ],
  imports: [ CommonModule, GaleriaRoutingModule ]
})
export class GaleriaModule { }
