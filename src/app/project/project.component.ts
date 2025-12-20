import { Component,OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  firstName: string ="William";
  lastName: string = "Wallace";
  phoneNumber: string = "(201) 748-6000";

  setProperty(event: Event){
   let target = event.target as HTMLInputElement
   let property: string = target.id
   switch(property){
     case "firstNameInput":
       this.firstName = target.value;
       break;
     case "lastNameInput":
       this.lastName = target.value;
       break;
     case "phoneNumberInput":
       this.phoneNumber = target.value;
       break;
     default:
        console.warn("No matching ID found!")
       break;
}
 }

  constructor() { }

  ngOnInit(): void {  }
}

