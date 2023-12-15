import { SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { }

  loginWithGoogle(user:SocialUser){
    return this.http.post(`http://localhost:8086/auth/google`,user)
  }

  getUsers(token:any){
    return this.http.get(`http://localhost:8086/shubham-hardware/users`,{
      headers:{"Authorization":"Bearer "+token}
    })
  }

  getAllProducts(token:any){
    return this.http.get(`http://localhost:8086/shubham-hardware/products`,{
      headers:{"Authorization":"Bearer "+token}
    })
  }

}
