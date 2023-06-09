import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { Route } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  users: any[] = [];


  constructor(private userDetailsService: UserDetailsService) {
   
  }

  ngOnInit(): void {
    // Retrieve data from local storage
    const data = localStorage.getItem('users');
    if (data) {
      this.users = JSON.parse(data);
    }
  }
  
  removeRow(): void {
    if (this.users.length > 1) {
      this.users.pop();
    }
  }
  
}