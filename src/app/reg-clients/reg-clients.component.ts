import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-reg-clients',
  templateUrl: './reg-clients.component.html',
  styleUrls: ['./reg-clients.component.scss']
})
export class RegClientsComponent {
  userDetails: any = {}; // Declare an object to hold user details

  constructor(private router: Router, private userDetailsServce: UserDetailsService) {}

  ngOnInit(): void {}

  saveData() {
    const user = {
      name: this.userDetails.name,
      surname: this.userDetails.surname,
      email: this.userDetails.email,
      phone: this.userDetails.phone,
      password: this.userDetails.password
    };

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if the user exists
    const existingUser = users.find((u: any) => u.email === this.userDetails.email);
    if (existingUser) {
      alert('User already exists. Please log in.');
      return;
    }

    // Add user to the array
    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    alert('User registered successfully');
    this.router.navigate(['/login']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}