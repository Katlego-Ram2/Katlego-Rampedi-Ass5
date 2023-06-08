import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  getUserDetails() {
    throw new Error('Method not implemented.');
  }
  formData = {
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
  
  constructor() { }
}
