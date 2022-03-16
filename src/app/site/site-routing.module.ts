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
      {
        path: 'sobre',
        loadChildren: () =>
          import('./paginas/sobre/sobre.module').then((m) => m.SobreModule),
      },
      {
        path: 'contato',
        loadChildren: () =>
          import('./paginas/contato/contato.module').then((m) => m.ContatoModule),
      },
      {
        path: 'servicos',
        loadChildren: () =>
          import('./paginas/servicos/servicos.module').then((m) => m.ServicosModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule { }
