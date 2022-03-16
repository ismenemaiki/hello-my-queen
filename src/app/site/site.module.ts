import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
// import { SharedModule } from '../shared/shared.module';
import { SiteComponent } from './site.component';
import { MenuComponent } from './componentes/menu/menu.component';

@NgModule({
  declarations: [
    SiteComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    // SharedModule,
    RouterModule
  ],
})
export class SiteModule { }
