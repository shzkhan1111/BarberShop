import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonComponent } from './salon/salon.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { CalenderGraphComponent } from './calender-graph/calender-graph.component';


const routes: Routes = [
  // { path: '', component: NavBarComponent }
];



@NgModule({
  declarations: [
    SalonComponent,
    CalenderGraphComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgSelectModule,
  ],
  exports: [
    SalonComponent
  ]
})
export class SalonModule { }
