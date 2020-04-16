import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './components/patient/add-patient/add-patient.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { DashboardComponent } from './components/layouts/dashboard/dashboard.component';
import { PatientsListComponent } from './components/patient/patients-list/patients-list.component';
import {PatientServicesService} from './services/patient-services.service';
import {HttpClientModule} from '@angular/common/http';
// import {FormsModule} from '@angular/forms';
import { PatientsPaymentComponent } from './components/patient/patients-payment/patients-payment.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    PatientsListComponent,
    PatientsPaymentComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgbModule,
  ],
  providers: [
    PatientServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
