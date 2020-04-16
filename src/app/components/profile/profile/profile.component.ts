import { Component, OnInit } from '@angular/core';
import {PatientServicesService} from '../../../services/patient-services.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imageSrc: string;
  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private patientService: PatientServicesService) { }

  ngOnInit() {
  }


  get f(){
    return this.myForm.controls;
  }

  onFileChange(event) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.myForm.patchValue({
          fileSource: reader.result
        });

      };

    }
  }
  submit() {
    console.log(this.myForm.value);

    this.patientService.saveProfile(this.myForm.value).subscribe( response => {
      console.log(response);
    });
    // console.log(profile);
  }
}
