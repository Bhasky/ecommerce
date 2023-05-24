import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SellerService } from '../service/seller.service';
import { signUp } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private seller: SellerService) { }

  // constructor(private http: HttpClient) {

  // }

  // onUserCreate(users: { uName: string, email: string, mobile: string, password: string }) {
  //   console.log(users);
  //   this.http.post('http://localhost:3000/signup', users)
  //     .subscribe((res) => {
  //       console.log(res);
  //     });
  // }




  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  onUserCreate(data: signUp): void {
    console.warn(data)
    this.seller.userSignUp(data)
  }

  login(data: signUp): void {
    console.warn(data)

  }

}



