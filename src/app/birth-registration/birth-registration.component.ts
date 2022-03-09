import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-birth-registration',
  templateUrl: './birth-registration.component.html',
  styleUrls: ['./birth-registration.component.css'],
})
export class BirthRegistrationComponent implements OnInit {
  birthForm: FormGroup;
  fatherDetail: FormGroup;

  constructor(public fb: FormBuilder) {
    this.birthForm = this.fb.group({
      childDetail: {
        firstName: [''],
        lastName: [''],
        eyeColor: [''],
        dateOfBirth: [''],
        bloodGroup: [''],
        weight: [''],
        gender: [''],
      },
      fatherDetail: {
        firstName: [''],
        lastName: [''],
        phone: [''],
        nationalId: [''],
        addressLine1: [''],
        addressLine2: [''],
        addressCity: [''],
        addressState: [''],
        addressPostalCode: [''],
      },
      motherDetail: {
        firstName: [''],
        lastName: [''],
        phone: [''],
        nationalId: [''],
        addressLine1: [''],
        addressLine2: [''],
        addressCity: [''],
        addressState: [''],
        addressPostalCode: [''],
      },
    });
    this.fatherDetail = this.birthForm.get('fatherDetail') as FormGroup;
  }

  ngOnInit() {}

  openTab(name) {
    const x = Array.from(
      document.getElementsByClassName('tab') as HTMLCollectionOf<HTMLElement>
    );
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    document.getElementById(name).style.display = 'block';
  }

  submit() {
    console.log(this.birthForm);
  }
}
