import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private authService : AuthService) { }
  
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): 	Observable<HttpEvent<any>> {
  
    
    console.log('Interceptor')
    const userToken = this.authService.getToken();
    
    const modifiedReq = httpRequest.clone({ 
      headers: httpRequest.headers.set('Authorization', `Bearer ${userToken}`),
    });
    
    
    return next.handle(modifiedReq);
  }
}