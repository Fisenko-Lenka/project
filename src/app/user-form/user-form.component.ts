import { Component, OnInit } from '@angular/core';
import { User } from '../models/model'
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public user: User;

  public formSubmited: boolean

  constructor(private router: Router){
    
  }

  ngOnInit() {
    this.formSubmited = false;
    this.user = {
    Name: ""
    }  
  
  }
  public onSubmited (){
      this.formSubmited = true;
  }

  goHome(){
    this.router.navigate(['menu']);
    localStorage.setItem('Name', this.user.Name);
}

}
