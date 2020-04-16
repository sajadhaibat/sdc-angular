import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/layouts/dashboard/dashboard.component';
import {AddPatientComponent} from './components/patient/add-patient/add-patient.component';
import {PatientsListComponent} from './components/patient/patients-list/patients-list.component';
import {PatientsPaymentComponent} from './components/patient/patients-payment/patients-payment.component';
import {ProfileComponent} from './components/profile/profile/profile.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'add-patient', component: AddPatientComponent},
  {path: 'patients-list', component: PatientsListComponent},
  {path: 'patients-payment', component: PatientsPaymentComponent},
  {path: 'add-profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
