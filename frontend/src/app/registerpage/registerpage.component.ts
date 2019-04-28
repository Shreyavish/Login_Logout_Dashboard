import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup , FormControl , Validators} from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  registerform: FormGroup  = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    cpass: new FormControl(null, [Validators.required]),
  });

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit() {
  }
  moveToLogin() {
    this._router.navigate(['./loginpage']);

  }

  register() {
    if (!this.registerform.valid || (this.registerform.controls.password.value !== this.registerform.controls.cpass.value) ) {
      console.log('invalid register');
      return;
    }
  this._userService.register(JSON.stringify(this.registerform.value))
  .subscribe(
    data => {console.log(data), this._router.navigate(['./loginpage']); },
    error => {
      return console.error(error);
    }
  );
      // console.log(JSON.stringify(this.registerform.value));
  }
}
