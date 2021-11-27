import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  form: FormGroup;
  constructor(private readonly fb: FormBuilder, private accountService: AccountService) {
    this.form = this.fb.group({
      name: [],      
      type: []
    })
  }

  submitForm() {
    this.accountService.createAccount("", "");
    console.log(this.form.getRawValue());
  }
}
