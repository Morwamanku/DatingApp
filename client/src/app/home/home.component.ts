import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RegisterComponent } from "../register/register.component";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [FormsModule, BsDropdownModule, CommonModule, RegisterComponent]
})
export class HomeComponent implements OnInit {

  registerMode= false;
  users: any;

  httpClient=inject(HttpClient)

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle(){
    this.registerMode= !this.registerMode;
  }

  getUsers(){
    this.httpClient.get('https://localhost:5001/API/users').subscribe({
      next: response => this.users= response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')

     
    })
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

}
