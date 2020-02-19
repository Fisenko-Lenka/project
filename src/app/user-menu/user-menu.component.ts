import { Component, OnInit } from '@angular/core';
import { User } from '../models/model'
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  public user: User;

  constructor(private router: Router){
    
  }

  ngOnInit() {
    this.user    
  }

   get getName(){
    return localStorage.getItem('Name')
    }

    goLogin(){
    return localStorage.removeItem('Name')
    }

}
