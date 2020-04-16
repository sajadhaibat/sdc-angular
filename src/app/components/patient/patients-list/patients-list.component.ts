import {Component, forwardRef, Inject, Injectable, OnInit} from '@angular/core';
import {PatientServicesService} from '../../../services/patient-services.service';
import {Observable} from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
})
@Injectable()
export class PatientsListComponent implements OnInit {
  patients: Observable<[]>;
  filterData: [];
  closeResult = '';

  constructor(@Inject(forwardRef(() => NgbModal)) private modalService: NgbModal, private patientService: PatientServicesService) {
  }

  ngOnInit() {
    this.patientService.getPatients().subscribe(response => {
      console.log(response);
      this.patients = response;
      this.filterData = response;
    });
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
