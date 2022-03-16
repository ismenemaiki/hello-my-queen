import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteComponent } from './site.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SiteComponent,
    children: [

      {
        path: 'inicio',
        loadChildren: () =>
          import('./paginas/inicio/inicio.module').then((m) => m.InicioModule),
      },
      {
        path: 'galeria',
        loadChildren: () =>
          import('./paginas/galeria/galeria.module').then((m) => m.GaleriaModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
