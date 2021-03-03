import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from '../login.service';
import { User } from '../models/user';
@Component({
  selector: 'app-deskboard',
  templateUrl: './deskboard.component.html',
  styleUrls: ['./deskboard.component.css']
})
export class DeskboardComponent implements OnInit {
  SearchForm: FormGroup;
  submitted = false;
  flightData: User[];
  constructor(private formBuilder: FormBuilder,private loginService:LoginService) { }

  ngOnInit(): void {

    this.SearchForm = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      departureDate: ['', Validators.required],
      return: ['', Validators.required]
          
    });

  }
  get contactUsValidation() { return this.SearchForm.controls; }


  
  search(){
    this.submitted = true;
    if (this.SearchForm.invalid) {
      return;
    }

    else{
      if(this.SearchForm.controls.from.value=="delhi" && this.SearchForm.controls.to.value=="goa"){
        this.flightData = this.loginService.search();
      }
      else{
        alert("Search Data is not Match");
      }
    }
}
}
