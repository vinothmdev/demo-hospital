import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BirthRegistrationComponent } from './birth-registration/birth-registration.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';

const appRoutes: Routes = [
  {
    path: 'register-birth',
    component: BirthRegistrationComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: ListPatientsComponent,
  },
  {
    path: 'contact',
    component: ContactsComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule {}
