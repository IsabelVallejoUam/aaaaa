import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = "http://uam.jdcorrea.me/pfe-personal-accounting/web/users";
  user = new Object;

  constructor(private http: HttpClient) { }
 
  public login(email: String, password: String){
    this.http.post(`${this.API_URL}/login`, {"email" : email, "password" : password}).subscribe((data=>{
      this.user = data;
    }));
  }

  public register(email: String, password: String, name: String){
    this.http.post(`${this.API_URL}/register`, {"email" : email, "password" : password, "name" : name}).subscribe((data=>{
      this.user = data;
    }));
  }
}
