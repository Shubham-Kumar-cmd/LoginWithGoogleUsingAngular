import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './services/api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(
    private authService: SocialAuthService,
    private apiCall: ApiCallService
    ){

  }
  ngOnInit(): void {
    this.authService.authState.subscribe({
      next:(user)=>{
        alert("login success")
        console.log(user);
        this.apiCall.loginWithGoogle(user).subscribe({
          next:(data)=>{
            console.log("Data from backend");
            console.log(data);
          },
          error:(error)=>{
            console.log("Error from backend");
            
            console.log(error);
          }
        });
      }
      ,error:(error)=>{
        alert("login failed")
        console.log(error);
      },
      complete:()=>{
        console.log("request completed!!");
      }
    })
  }
  title = 'shubham_hardware_google_login';
}
