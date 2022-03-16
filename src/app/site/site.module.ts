import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteComponent } from './site.component';
import { MenuComponent } from './componentes/menu/menu.component';

import { SiteRoutingModule } from './site-routing.module';

@NgModule({
  declarations: [
    SiteComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    RouterModule
  ],
})
export class SiteModule { }
