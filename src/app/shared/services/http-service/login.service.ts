import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import LoginModel from '../../../shared/model/login.model'
import { ILogin } from '../../interface/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  url =`http://interview.tmskit.com`
  constructor(
   private http: HttpClient,
  ) {}

  getLogin(body: LoginModel): Observable<ILogin>{
    return this.http.post<ILogin>(`${this.url}/login`, body)
  }
}