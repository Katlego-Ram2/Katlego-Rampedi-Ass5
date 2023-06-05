import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  formData = {
    name: '',
    email: '',
    password: '',
    cellPhone: ''
  };
  constructor() { }
}
