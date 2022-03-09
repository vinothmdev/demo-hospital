import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BirthRegistrationComponent } from './birth-registration/birth-registration.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    BirthRegistrationComponent,
    PersonalDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
