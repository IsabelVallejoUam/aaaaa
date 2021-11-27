import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getReport();
  }

  erase(): void {
    this.router.navigate(['./transactions']);
  }

  edit(): void {
    this.router.navigate(['./transactions/create']);
  }

  getReport(): void {
    // const id= Number(this.route.snapshot.paramMap.get('id'));
    // this.report=this.reportSvc.getReport(id);
  }
}
