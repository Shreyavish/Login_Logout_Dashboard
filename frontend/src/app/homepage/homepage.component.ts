import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _user: UserService, private _router: Router) {
    this._user.user()
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );

   }

  ngOnInit() {
  }

    logout() {
      this._user.logout()
      .subscribe(
        data => {
          console.log(data);
           this._router.navigate(['/loginpage']);
          },
        error => console.log(error)
      );
    }

}
