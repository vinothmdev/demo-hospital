import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BirthRegistrationComponent } from './birth-registration/birth-registration.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PersonalDetailsSummaryComponent } from './personal-details/personal-details-summary/personal-details-summary.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    BirthRegistrationComponent,
    PersonalDetailsComponent,
    PersonalDetailsSummaryComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
