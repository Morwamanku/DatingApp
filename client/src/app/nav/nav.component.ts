import { Component } from '@angular/core';
import { AccountService } from '../_service/account.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { error } from 'console';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,BsDropdownModule,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  providers:[HttpClient]
})
export class NavComponent {

  model:any={};
  

  constructor(public accountService:AccountService){}

  ngOnInit(): void {
   
  }



  login(){
    this.accountService.login(this.model).subscribe({
      next:response=>{
        console.log(response);
      },
      error:error => console.log(error)
    })
    
  }

  logout(){
    this.accountService.logout();
  }

}
