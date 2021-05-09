import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosPage } from './usuarios.page';
import { LugaresPage } from '../lugares/lugares.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosPage
  },
  {
    path: 'lugares',
    component: LugaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosPageRoutingModule {}
