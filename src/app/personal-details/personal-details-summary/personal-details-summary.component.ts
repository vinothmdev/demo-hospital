import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-details-summary',
  templateUrl: './personal-details-summary.component.html',
  styleUrls: ['./personal-details-summary.component.css'],
})
export class PersonalDetailsSummaryComponent implements OnInit {
  detailsList = {
    firstName: 'First Name',
    lastName: 'Last Name',
    eyeColor: 'Eeye Color',
    dateOfBirth: 'Date Of Birth',
    bloodGroup: 'Blood Group',
    weight: 'Weight',
    gender: 'Gender',
    phone: 'phone',
    nationalId: 'National Id',
    addressLine1: 'Address Line1',
    addressLine2: 'Address Line2',
    addressCity: 'City',
    addressState: 'State',
    addressPostalCode: 'Postal Code',
  };

  @Input()
  personForm: FormGroup;

  childDetail: any;
  fatherDetail: any;
  motherDetail: any;
  details: any;

  constructor() {}

  ngOnInit() {
    this.personForm.valueChanges.subscribe(() => {
      this.details = this.personForm.value;
      this.childDetail = Object.keys(this.details['childDetail']);
      this.fatherDetail = Object.keys(this.details['fatherDetail']);
      this.motherDetail = Object.keys(this.details['motherDetail']);
    });
  }
}
