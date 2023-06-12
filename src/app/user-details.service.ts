import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
       constructor() { }
  userData = {
    name: '',
    surname: '',
    email: '',
    town: '',
    suburb: '',
    street: '',
    code: '',
    password: '',
    confirmPassword: '',
    phone: ''
  };
  
 
}
