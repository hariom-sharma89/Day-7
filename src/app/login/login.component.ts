import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  logindetail:any;
  constructor(private formBuilder: FormBuilder,private loginService:LoginService,private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
     
     
    });
  }
  get contactUsValidation() { return this.loginForm.controls; }


  loginForms(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    else{
    if(this.loginForm.controls.username.value=="admin" && this.loginForm.controls.password.value=="admin"){
      this.router.navigateByUrl('/deskboard');
    }
    else{
      alert("User Name & Password in invalid")
    }
    }


}
}
