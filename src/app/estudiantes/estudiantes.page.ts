import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

  constructor(

    public _loginservice: LoginService,
    
    private router: Router,) { }

  ngOnInit() {
  }

  elimirat(){
    this.router.navigate(['login0'])
  }

}
