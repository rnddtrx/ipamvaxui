import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  myToken=''

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  idForm = new FormGroup({
    id: new FormControl(''),
  });

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.profileForm.value)
    this.authService.authenticate(this.profileForm.value).subscribe(r=>{
      console.log(r)
      this.authService.setToken(r)
      this.myToken=this.authService.getToken();
    })    
  }

  getUser(){
    this.authService.getUser(this.idForm.value.id).subscribe(r=>{
      console.log(r)
    })
  }



  

}
