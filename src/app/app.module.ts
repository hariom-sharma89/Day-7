import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DeskboardComponent } from './deskboard/deskboard.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import{LoginService} from '../app/login.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeskboardComponent,
    MyaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
