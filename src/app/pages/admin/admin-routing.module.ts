import { HomeComponent } from './modules/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path:'', component:AdminComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.component').then((Component) => Component.HomeComponent),
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
