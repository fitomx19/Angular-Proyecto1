import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OperacionesComponent} from './operaciones/operaciones.component';
const routes: Routes = [
  {path:'operaciones',component:OperacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
