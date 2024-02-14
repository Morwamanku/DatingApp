import { Component, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { response } from 'express';
import { error } from 'console';
import { NavComponent } from "./nav/nav.component";
import { FormsModule } from '@angular/forms';
import { AccountService } from './_service/account.service';
import { User } from './_models/user';
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [HttpClient, AccountService],
    imports: [CommonModule, RouterOutlet, HttpClientModule, NavComponent, HomeComponent]
})
export class AppComponent implements OnInit {

  title = 'Dating App';
  

  constructor(private accountService:AccountService) {}


  
  ngOnInit(): void {
    
    this.setCurrentUser();
  }

  

  setCurrentUser(){
    const userString= localStorage.getItem('user');
    if (!userString) return;
    const user:User= JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }

}
