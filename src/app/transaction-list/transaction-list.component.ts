import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../models/transaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[]
  constructor(private transactionService: TransactionService, private router: Router) {
    this.transactions = [];
   }

  ngOnInit(): void {
    this.transactions = this.transactionService.getTransactions();
    // this.transactionService.getTransactions().subscribe((data)=>{
    //   console.log(data);
    //   this.transactions = data;
    // });
  }

  seeTransaction(id: any){
    this.router.navigate(['./transactions',id])
  }

}
