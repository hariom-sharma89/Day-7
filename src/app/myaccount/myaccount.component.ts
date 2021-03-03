import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {LoginService} from '../login.service';
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  flightData: User[];
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.flightData = this.getUsersFlight();
    console.log("ppp",this.flightData);
   

  }
  getUsersFlight(): User[] {
    return this.loginService.getFlightFromData();
  }
}
