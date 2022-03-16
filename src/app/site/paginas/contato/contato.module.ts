import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ ContatoComponent ],
  imports: [ CommonModule, ContatoRoutingModule ]
})
export class ContatoModule { }
