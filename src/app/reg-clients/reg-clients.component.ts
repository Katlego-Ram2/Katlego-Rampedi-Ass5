import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-reg-clients',
  templateUrl: './reg-clients.component.html',
  styleUrls: ['./reg-clients.component.scss']
})
export class RegClientsComponent {

  userDetails: any = {};

  constructor(private router: Router, private userDetailsServce: UserDetailsService) { }

  ngOnInit(): void { }

  saveData() {
    const confPass = this.userDetails.confirmPassword;
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = {
      name: this.userDetails.name,
      surname: this.userDetails.surname,
      email: this.userDetails.email,
      phone: this.userDetails.phone,
      password: this.userDetails.password

    };

    const chkEmail = /^\S+@\S+\.\S+$/.test(user.email);
    const existingUser = users.find((userD: any) => userD.email === this.userDetails.email);

    //validation
    if (!user.name || !user.surname || !user.password || !user.phone || !user.email) {
      alert("Empty spaces not allowed");
      return;

    } else if (!isNaN(user.name)) {
      alert("Firstname can not be numbers");
      return;
    } else if (!isNaN(user.surname)) {
      alert("Lastname can not be numbers");
      return;
    } else if (!chkEmail) {
      alert("invalid email");
      return;
    } else if (isNaN(user.phone) || user.phone.length < 10) {
      alert("invalid cellphone number");
      return;
    } else if (confPass != user.password) {
      alert("passwords must match");
      return;
    }
    else if (existingUser) {
      alert('User already exists. Please log in.');
      this.router.navigate(['/login']);
      return;
    } else {

      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      alert('User registered successfully');
      this.router.navigate(['/login']);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}