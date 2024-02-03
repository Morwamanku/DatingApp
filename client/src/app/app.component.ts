import { Component, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[HttpClient]
})
export class AppComponent implements OnInit {

  title = 'client life';
  users: any;

  constructor() {}

  httpClient=inject(HttpClient)
  
  
  ngOnInit(): void {
    this.httpClient.get('https://localhost:5001/API/users').subscribe({
      next: response => this.users= response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')

     
    })
  }

}
