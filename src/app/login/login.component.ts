import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import LoginModel from '../shared/model/login.model';
import { LoginService } from '../shared/services/http-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform!: FormGroup;
  
  constructor(
    private route: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.login();
    this.loginform = new FormGroup({

      username: new FormControl(null,Validators.required),

      password: new FormControl(null,Validators.required)
    });

  }

  login(){
    let body = new LoginModel("John.Doe", "9876543210");
    this.loginService.getLogin(body).subscribe(res => {
      this.route.navigate(['movies'])
    })
  }

}
