import { Component, OnInit } from '@angular/core';
import {PatientServicesService} from '../../../services/patient-services.service';

@Component({
  selector: 'app-patients-payment',
  templateUrl: './patients-payment.component.html',
  styleUrls: ['./patients-payment.component.css']
})
export class PatientsPaymentComponent implements OnInit {
  patients: [];
  phone: '';
  address: '';
  loan: '';
  constructor(private patientService: PatientServicesService) { }

  ngOnInit() {
    this.patientService.getPatientsName().subscribe(response => {
      this.patients = response;
      console.log(response);
    });
  }
  onChange($event, patientId) {
    console.log(patientId);
    this.patientService.getsinglePatientdetials(patientId).subscribe(response => {
      this.phone = response[0]['phone_number'];
      this.address = response[0]['address'];
      this.loan = response[0]['loan_amount'];
      console.log(response);
    });
  }

}
