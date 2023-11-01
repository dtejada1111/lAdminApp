import { HttpResponse } from '@capacitor-community/http';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-login0',
  templateUrl: './login0.page.html',
  styleUrls: ['./login0.page.scss'],
})
export class Login0Page implements OnInit {
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


  inLogin(){
    this._loginservice.inilogin(this.email, this.password).then(async (res) => {
            console.log(res)
              await Preferences.set({
                key: 'token',
                value: res.data.token, 

              });
              
            this.Quienes();
            
        });
  }

 
  

  async Quienes (){
    const { value } = await Preferences.get({ key: 'token' });
    if(value)
    this._loginservice.quien(value).then((res)=>(

   
        this.router.navigate(['home/' + res.data])
    
    ))
}



  

}

