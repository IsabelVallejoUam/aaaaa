import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: Account[]
  constructor(private accountService: AccountService, private router:Router) {
    this.accounts= []
  }

  seeAccount(id: any){
    this.router.navigate(['./accounts',id])
  }

  ngOnInit(): void {
    this.accounts = this.accountService.getAccounts();
    // this.accountService.getAccounts().subscribe((data)=>{
    //   console.log(data);
    //   this.accounts = data;
    // });
  }

}
