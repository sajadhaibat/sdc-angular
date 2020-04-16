import { Component, OnInit } from '@angular/core';
import {PatientServicesService} from '../../../services/patient-services.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(private patientService: PatientServicesService) { }

  ngOnInit() {
  }
  savePatient(patient) {
    this.patientService.savePatient(patient).subscribe( response => {
      console.log(response);
    });
    console.log(patient);
  }
}
