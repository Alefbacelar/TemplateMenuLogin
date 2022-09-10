import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CoreModule } from 'src/app/core/core.module';
import { HomeComponent } from './modules/home/home.component';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ]
})
export class AdminModule { }
