import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePackage } from '../../models/service-package';




@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent {
  address: string = '';
  mapUrl: string = '';
  city: string = '';
  area: string = '';
  contact: string = '';

  services : ServicePackage[] = [
    new ServicePackage(1 , 'Haircut' , 0),
    new ServicePackage(2 , 'Manicure' , 0),
    new ServicePackage(3 , 'Pedicure' , 0),
    new ServicePackage(4 , 'Massage' , 0),
    new ServicePackage(5 , 'Facial' , 0),
    ];

  selectedServices: ServicePackage[] = [];
  selectedServicesDisplayDD : ServicePackage[] = [];
  onSelect(selectedItems: any[]) {
    // ServicePackage
    // selectedServicesDisplayDD
    this.selectedServices?.forEach(element => {
      console.log(element)
    });

   console.log();

  }
  onlyNumbers(event: any) {
    const pattern = /^(\+?[0-9]{1,3}([ -][0-9]{3})*|\([0-9]{1,3}\)([ -][0-9]{3})*|[0-9]{1,4}([ -][0-9]{3,4})*)$/;

    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar) || event.target.value.length >= 13) {
      event.preventDefault();
    } else if (event.target.value.length === 4) {
      event.target.value += ' ';
    }
}

submit() {
  const selectedServicesWithPrice = this.selectedServices.filter(service => service.price)
    .map(service => ({
      id: service.id,
      name: service.name,
      price: service.price
    }));

  // send selectedServicesWithPrice to backend
  console.log(selectedServicesWithPrice);
}


}
