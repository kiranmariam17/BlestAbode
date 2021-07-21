/**import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}**/
/**import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  user = this.fb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  });

  errorMsg: String='';
  submitted = false;

  get formControl(){
    return this.user.controls;
  }

  // userLogin(){
  //   console.log(this.user.value);
  //   this.auth.userLogin(this.user.value)
  //   .subscribe(
  //     (      res: { token: string; })=>{
  //       localStorage.setItem('token',res.token);
  //       console.log('Success');
  //       this.router.navigate(['/home']);
  //     },
  //     (      err: String) =>{
  //       console.log(err);
  //       this.errorMsg = err;
  //     }
  //   )
  // }

  loginUser(){
    alert('Welcome back ${this.user.value}!');
    this.auth.userLogin(this.user).subscribe(
      (res) => {
        localStorage.setItem('token',res.token);
        localStorage.setItem('username',this.user.value)
        if (this.user.role == '1') {
          this.router.navigate(['/sdash']);
       } else if (this.user.role == '2'){
        this.router.navigateByUrl('/tdash', {
          state: {user: this.user },
        });
       }
      },
      (err) => {
        console.log(err);

      })
    }
  }**/


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    uname: '',
    pw: '',
    role: '',
  };
  constructor(private _auth: AuthService, private _router: Router) {}
  ngOnInit(): void {}
  checkRole() {
    if (this.user.role == '2') {
      return true;
    }
    return false;
  }
  loginUser() {
    alert(`Welcome back ${this.user.uname}!`);
    this._auth.userLogin(this.user).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', this.user.uname);
        if (this.user.role == '1') {
          this._router.navigate(['/sdash']);
        } else if (this.user.role == '2') {
          this._router.navigateByUrl('/tdash', {
            state: { user: this.user },
          });
        }
      },
      (err) => {
        console.log(err);
        this._router.navigate(['/']);
      }
    );
  }
}
