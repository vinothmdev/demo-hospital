import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-birth-registration',
  templateUrl: './birth-registration.component.html',
  styleUrls: ['./birth-registration.component.css'],
})
export class BirthRegistrationComponent implements OnInit {
  birthForm: FormGroup;
  childDetail: FormGroup;
  fatherDetail: FormGroup;
  motherDetail: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.birthForm = this.fb.group({
      childDetail: this.fb.group({
        firstName: [''],
        lastName: [''],
        eyeColor: [''],
        dateOfBirth: [''],
        bloodGroup: [''],
        weight: [''],
        gender: [''],
      }),
      fatherDetail: this.fb.group({
        firstName: [''],
        lastName: [''],
        phone: [''],
        nationalId: [''],
        addressLine1: [''],
        addressLine2: [''],
        addressCity: [''],
        addressState: [''],
        addressPostalCode: [''],
      }),
      motherDetail: this.fb.group({
        firstName: [''],
        lastName: [''],
        phone: [''],
        nationalId: [''],
        addressLine1: [''],
        addressLine2: [''],
        addressCity: [''],
        addressState: [''],
        addressPostalCode: [''],
      }),
    });
    this.childDetail = this.birthForm.get('childDetail') as FormGroup;
    this.motherDetail = this.birthForm.get('motherDetail') as FormGroup;
    this.fatherDetail = this.birthForm.get('fatherDetail') as FormGroup;
  }

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
    console.log(this.birthForm.value);
  }
}
