import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  constructor(private readonly fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
      username: [],      
      password: []
    })
  }

  submitForm() {
    console.log(this.form.getRawValue());
    this.userService.login("", "");
  }

}
