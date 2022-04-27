import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ InicioComponent ],
  imports: [ CommonModule, InicioRoutingModule ]
})
export class InicioModule { }
