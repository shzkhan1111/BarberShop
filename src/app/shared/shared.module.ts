import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSelectModule } from '@ng-select/ng-select';

import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [],
  imports: [CommonModule, NgSelectModule , FormsModule],
  exports: [
  NgSelectModule,
  FormsModule,
  CommonModule,



]
})
export class SharedModule { }
