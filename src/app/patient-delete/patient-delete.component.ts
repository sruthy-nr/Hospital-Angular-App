import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent {
  pid=""
 
delete=()=>{
  let data:any={
    "pid":this.pid
    }
  console.log(data)
}
}
