import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  API_URL = "http://uam.jdcorrea.me/pfe-personal-accounting/web/accounts";

  accounts:Account[]= [
    {name: "Ahorros para San Andres", type: "savings", id: 1, balance: 2000},
    {name: "Préstamo para la casa", type: "credit", id: 2, balance: 30000},
  ]
  constructor(private http: HttpClient) { }

  public getAccounts() {
    return this.accounts;
    // return this.http.get<Account[]>(`${this.API_URL}`);
  }

  public createAccount(name: String, type: String){
    this.http.post(`${this.API_URL}/create`, {"name" : name, "type" : type});
  }
}
