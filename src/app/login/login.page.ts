import { HttpResponse } from '@capacitor-community/http';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;

  public email!: string;
  public password!: string;
  public _id!: string;

  constructor(
    public _loginservice: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute,
  ) { }

  ngOnInit() {

  
  }

  ll(){
    const _id = this.Quienes();
    this._loginservice.getme(this._id).then(async (res) =>{
   
      console.log('askjfndajs ' +_id)
    })
  }

  inLogin(){
    this._loginservice.inilogin(this.email, this.password).then(async (res) => {
            console.log(res)
              await Preferences.set({
                key: 'token',
                value: res.data.token,
              });

              
            this.Quienes();
            this.ll();
        });
  }

 
  

  async Quienes (){
    const { value } = await Preferences.get({ key: 'token' });
    if(value)
    this._loginservice.quien(value).then((res)=>(

      console.log("Este soy yo = ",res.data)
    
    ))
}



  

}

