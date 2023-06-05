import { Component } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage!: string;
  isFieldTouched: boolean = false;


  constructor(private userDetails: UserDetailsService,private router: Router) { }
  get formData() {
    return this.userDetails.formData;
  }


  isFieldEmpty(fieldValue: string): boolean {
    return fieldValue.trim() === '';
    
  }



  setFieldTouched(isTouched: boolean) {
    this.isFieldTouched = isTouched;
  }


  get isFormValid(): boolean {
    return this.formData.email.trim() !== '' && this.formData.password.trim() !== '';
  }


  getBorderColor(fieldValue: string): string {
    
    if (this.isFieldEmpty(fieldValue)) {
      return 'red';
    
    }
    return this.isFieldTouched ? 'green' : '#ccc';
  
  }
  checkCredentials() {
    
    const email = this.formData.email;
  const password = this.formData.password;

  const usersData = JSON.parse(localStorage.getItem('users') || '[]');
  const userData = usersData.find((user: { email: string; password: string }) => user.email === email);

  if (userData && userData.password === password) {
    this.router.navigate(['register']);
    this.errorMessage = '';
  } else {
    this.errorMessage = 'Invalid email or password';
  }
    
  }
  isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidDomains = ['za', 'gmail', 'com'];
    
    if (!emailRegex.test(email)) {
      return false;
    }
    
    const domain = email.split('@')[1];
    for (const invalidDomain of invalidDomains) {
      if (domain.includes(invalidDomain)) {
        return false;
      }
    }
    
    return true;
  }
}
