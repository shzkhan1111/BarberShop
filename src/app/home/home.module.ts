import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './NavBar/nav-bar.component';
import { LocationComponent } from './location/location.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { LocationMapComponent } from './location-map/location-map.component';
import { SalonComponent } from '../salon/salon/salon.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  // { path: '', component: NavBarComponent },
  { path: 'RegisterSalon', component: SalonComponent }

];


@NgModule({
  declarations: [
    NavBarComponent,
    LocationComponent,
    LocationFormComponent,
    LocationMapComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule
  ,NavBarComponent
  ]
})
export class HomeModule { }
