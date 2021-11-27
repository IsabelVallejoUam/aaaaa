import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent {

  form: FormGroup;
  constructor(private readonly fb: FormBuilder, private transactionService: TransactionService) {
    this.form = this.fb.group({
      name: [],      
      type: []
    })
  }

  submitForm() {
    this.transactionService.createTransaction("", 0, "", "", 0);
    console.log(this.form.getRawValue());
  }
}
