import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  public id: string;
  getEmployees: any;
  details: any;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.updateEmployeeDetails();
  }

  updateEmployeeDetails() {

    this.id = this.route.snapshot.paramMap.get('id');
    console.log("this.id", this.id);

    this.getEmployees = JSON.parse(localStorage.getItem(environment.user));
    console.log("getEmployees", this.getEmployees);

    this.getEmployees.forEach(element => {
      if (element.serial == this.id) {
        console.log("deatils to be updated of ", element);
        this.details = element
      }
    });

  }


  userUpdateInfo(form: NgForm) {
    let objUpdatedInfo = {
      serial: form.value.serial,
      name: form.value.name,
      age: form.value.age,
      department: form.value.department,
      bloodGrp: form.value.bloodGrp,
      address: form.value.address,
      phoneNumber: form.value.phoneNumber
    }

    console.log("objUpdatedInfo", objUpdatedInfo);


    let findEmployee = JSON.parse(localStorage.getItem(environment.user))

    let newArray = findEmployee.filter(ele => ele.serial != objUpdatedInfo.serial);

    console.log("newArray", newArray);

    newArray.push(objUpdatedInfo);

    localStorage.setItem(environment.user, JSON.stringify(newArray));
    console.log(localStorage.getItem(environment.user));
    this.router.navigateByUrl('/employee-list');
  }

}
