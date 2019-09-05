import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  employees: any;

  getEmployees() {
    this.employees = JSON.parse(localStorage.getItem(environment.user));
    console.log("employeesss", this.employees);
  }

  editEmployeeDetails(id) {
    console.log(id)
    this.router.navigate(['update-form-details/', id]);
  }

  deleteEmployeeDetails(id) {
    console.log(id)
    let findEmployee = JSON.parse(localStorage.getItem(environment.user))
    let newArray = findEmployee.filter(ele => ele.serial != id);
    console.log("newArray", newArray);
    localStorage.setItem(environment.user, JSON.stringify(newArray));
    this.ngOnInit();
  }
}
