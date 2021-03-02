import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeskboardComponent} from './deskboard/deskboard.component';
import { LoginComponent} from './login/login.component';
import { MyaccountComponent} from './myaccount/myaccount.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'deskboard', component: DeskboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'myaccount', component: MyaccountComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
