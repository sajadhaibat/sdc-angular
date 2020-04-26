import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientServicesService {
  url = 'http://127.0.0.1:8000/api/patient';
  constructor(private http: HttpClient) { }
  getPatients() {
    return this.http.get<any[]>(this.url);
  }
  savePatient(patient) {
    return this.http.post(this.url, patient);
  }

  getsinglePatientdetials(patient) {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/getdetails/' + patient);
  }

  getPatientsName() {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/getPatientsName');
  }
  saveProfile(profile) {
    return this.http.post('http://127.0.0.1:8000/api/profile', profile);
  }
}
