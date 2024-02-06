import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private router : Router){}
fg = new FormGroup({
  username : new FormControl('',[Validators.required,Validators.minLength(3)]),
  password : new FormControl('',[Validators.required,Validators.pattern('^[A-Z].{5,}$')]),
})
checkCredentials(){
  if (this.fg.get('username')?.value == "Admin" && this.fg.get('password')?.value == "Admini" ){
    this.router.navigate(['projects'])
  }
}
}
