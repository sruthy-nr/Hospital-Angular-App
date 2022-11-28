import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
  name=""
  pid=""
  adrs=""
  cnt=""
  doa=""
  pi=""
  doctor=""
add=()=>{
  let data:any={
    "name":this.name,
    "pid":this.pid,
    "adrs":this.adrs,
    "cnt":this.cnt,
    "doa":this.doa,
    "pi":this.pi,
    "doctor":this.doctor
  }
  console.log(data)
}
}
