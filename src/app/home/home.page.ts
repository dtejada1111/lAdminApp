import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';


export interface Users {
  perfil: string;
  id: string;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public formr!: FormGroup;

public _id!: string;
  users!: Users[];
  public perfil!: string;
  
  constructor(private _auth: LoginService,private actRoute: ActivatedRoute,private router: Router, ) {

    
    
  }

  ionViewWillEnter() {
    
   this.rol();
  }


  perf(roll: string){

    let _id  = this.actRoute.snapshot.paramMap.get('id') as string;

    if (roll == "admin") {
      this.router.navigate(['admin/' + _id])
    }else if (roll == "estudiante") {
      this.router.navigate(['estudiantes/' + _id])
    }

  }

  

  rol(){
    let _id  = this.actRoute.snapshot.paramMap.get('id') as string;

    this._auth.getme(_id).then((res)=>(
      this.perfil = res.data.perfil,
      this.users = Array.of(res.data),
      

      this.perf(this.perfil)
     

   //   this.router.navigate(['admin'])
      
    )) 
        
  
  }

}


