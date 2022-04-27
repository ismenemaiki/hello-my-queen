import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteComponent } from './site.component';
import { MenuComponent } from './componentes/menu/menu.component';

import { SiteRoutingModule } from './site-routing.module';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@NgModule({
  declarations: [
    SiteComponent,
    MenuComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    RouterModule
  ],
})
export class SiteModule { }
