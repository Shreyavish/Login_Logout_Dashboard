import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private _router: Router, private _userService: UserService) { }

  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  ngOnInit() {
  }

  moveToRegister() {
    this._router.navigate(['/registerpage']);
  }
  login() {
    /*if (!this.loginform.valid) {
      console.log('invalid login');
    } else {
      console.log(JSON.stringify(this.loginform.value));

    }*/
    this._userService.login(JSON.stringify(this.loginform.value))
    .subscribe(
      data => {console.log(data); this._router.navigate(['/homepage']); },
      error => console.error(error)
    );
  }
}
