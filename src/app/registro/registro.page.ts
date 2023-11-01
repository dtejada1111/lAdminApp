import { HttpResponse } from '@capacitor-community/http';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  public nombre!: string;
  public perfil!: string;
  public email!: string;
  public password!: string;

  constructor(
   
    public _loginservice: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
  }



  registro(){

    
    this._loginservice.nuwregistro( this.email, this.password,this.nombre, this.perfil).then(async (res) => {
            console.log(res)
            console.log(this.nombre, this.perfil ,this.email, this.password)
            
            if (res) {
               this.router.navigate(['login0'])
            }
            
        });

}

}
