import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { empty } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit() {
   
  }

  userInfo(form: NgForm) {
    console.log("hiiiiiii")
    let newUserData = [];
    let objInfo = {
      serial: form.value.serial,
      name: form.value.name,
      age: form.value.age,
      department: form.value.department,
      bloodGrp: form.value.bloodGrp,
      address: form.value.address,
      phoneNumber: form.value.phoneNumber
    }
    console.log("objInfo", objInfo)

    console.log(localStorage.length);

    if (localStorage.length != 0) {
      let previousData = JSON.parse(localStorage.getItem(environment.user))
      console.log(typeof previousData)
      previousData.push(objInfo)
      localStorage.setItem(environment.user, JSON.stringify(previousData));
      console.log("Local Storage", previousData, localStorage.getItem(environment.user));
      form.reset();
    }
    else {
      newUserData.push(objInfo);
      localStorage.setItem(environment.user, JSON.stringify(newUserData));
      console.log("Local Storage", newUserData, localStorage.getItem(environment.user));
      form.reset();
    }
  }
}
