import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  API_URL = "http://uam.jdcorrea.me/pfe-personal-accounting/web/transactions";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  transactions:Transaction[] = [
    {category: 'expense', ammount: 500, id: 1, comment: 'Que bonito muchas gracias', destination: 2},
    {category: 'income', ammount: 1000, id: 2, comment: 'Pago de e', destination: 1},
    {category: 'income', ammount: 1000, id: 3, comment: 'Pago de e', destination: 1},
  ]
  constructor(private http: HttpClient) { }

  public getTransactions() {
    return  this.transactions;
    //return this.http.get<Transaction[]>(`${this.API_URL}`, this.httpOptions);
  }

  public createTransaction(comment: String, ammount: Number, type: String, category: String, destination: Number){
    this.http.post(`${this.API_URL}/create`, {"comment":comment,"type":type,"ammount":ammount,"category_id":category,"destinationAccount":destination});
  }
}
