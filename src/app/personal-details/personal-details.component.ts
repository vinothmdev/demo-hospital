import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
})
export class PersonalDetailsComponent implements OnInit {
  @Input()
  personType: string;

  @Input()
  personForm: FormGroup;

  bloodGroups: any[];
  constructor() {}

  ngOnInit() {
    this.bloodGroups = [
      { key: 'A', value: 'A' },
      { key: 'B', value: 'B' },
      { key: 'O', value: 'O' },
      { key: 'AB', value: 'AB' },
    ];
  }
}
