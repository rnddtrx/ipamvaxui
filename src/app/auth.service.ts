import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token='';

  constructor(private http:HttpClient ) { }

  public authenticate(user:any):Observable<any>{
    return this.http.post(environment.backendServer+'/api/v1/authenticate',user)
  }

  public getUser(id:any):Observable<any>{
    return this.http.get(environment.backendServer+'/api/v1/people/6',id)
  }

  public setToken(mytoken:any){
    this.token=mytoken.token;
  }

  public getToken(){
    return this.token;
  }


}
