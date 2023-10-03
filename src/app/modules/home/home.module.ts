import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ColeccionesComponent } from './pages/colecciones/mis-colecciones/colecciones.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InventarioProdComponent } from './pages/inventarios/inventario-prod/inventario-prod.component';
import { InventarioProveeComponent } from './pages/inventarios/inventario-provee/inventario-provee.component';


@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    SharedModule
  ]
})
export class HomeModule { }
