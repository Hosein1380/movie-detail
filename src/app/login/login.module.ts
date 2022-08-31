import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { loginRoutes } from './login.routing';



@NgModule({
  declarations: [
  LoginComponent
  ],
  imports: [
      CommonModule,
      RouterModule.forChild(loginRoutes),
  ],
  providers: [],
})
export class LoginModule { }
