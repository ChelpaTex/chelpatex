import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { MatDialogLogoutComponent } from './mat-dialog-logout/mat-dialog-logout.component';
import { MatDialogColeccionesComponent } from './mat-dialog-colecciones/mat-dialog-colecciones.component';
import { MatDialogMoldeDiseComponent } from './mat-dialog-molde-dise/mat-dialog-molde-dise.component';
import { MatDialogTareaComponent } from './mat-dialog-tarea/mat-dialog-tarea.component';
import { MatDialogCostoComponent } from './mat-dialog-costo/mat-dialog-costo.component';
import { MatDialogCostEmpleadoComponent } from './mat-dialog-cost-empleado/mat-dialog-cost-empleado.component';
import { MatDialogCostIndirectoComponent } from './mat-dialog-cost-indirecto/mat-dialog-cost-indirecto.component';
import { MatDialogBorrarComponent } from './mat-dialog-borrar/mat-dialog-borrar.component';
import { MatDialogNewItemComponent } from './mat-dialog-new-item/mat-dialog-new-item.component';
import { MatDialogNewMoldeComponent } from './mat-dialog-new-molde/mat-dialog-new-molde.component';
import { MatDialogDetalleComponent } from './mat-dialog-detalle/mat-dialog-detalle.component';
import { MatDialogInfoMoldeComponent } from './mat-dialog-info-molde/mat-dialog-info-molde.component';



@NgModule({
  declarations: [
    MatDialogLogoutComponent,
    MatDialogColeccionesComponent,
    MatDialogMoldeDiseComponent,
    MatDialogTareaComponent,
    MatDialogCostoComponent,
    MatDialogCostEmpleadoComponent,
    MatDialogCostIndirectoComponent,
    MatDialogBorrarComponent,
    MatDialogNewItemComponent,
    MatDialogNewMoldeComponent,
    MatDialogDetalleComponent,
    MatDialogInfoMoldeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MaterialModule
  ]
})
export class SharedModule { }
