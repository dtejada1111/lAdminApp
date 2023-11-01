import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(

    public _loginservice: LoginService,
    
    private router: Router,
  ) { }

  ngOnInit() {
  }

  elimirat(){
    this.router.navigate(['login0'])
  }

}
