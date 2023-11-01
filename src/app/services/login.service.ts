import { Injectable } from '@angular/core';
import { Http, HttpResponse } from '@capacitor-community/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userData = new BehaviorSubject(null);
  
  constructor() { }

        inilogin =  async (email: string, password: string) => {
             const options = {
                url:'http://localhost:3000/users/login',
               headers: { 
                accept: 'application/jseon',
                'content-type': 'application/json',
               },
                data: { email:email, password: password }, 
              };
          
              const response: HttpResponse = await Http.post(options);
              return response;
            
          };
          

          nuwregistro =  async (email: string, password: string, nombre: string, perfil: string) => {
            const options = {
               url:'http://localhost:3000/signup',
               headers: { 
               accept: 'application/jseon',
                'content-type': 'application/json',
              },
               data: {email: email, password: password, nombre:nombre, perfil: perfil}, 
             };
         
             const response: HttpResponse = await Http.post(options);
             return response;
           
         };



              getme =  async (id: string) => {
                const options = {
                  url: 'http://localhost:3000/users/'+id,
                 headers: { 
                  accept: 'application/jseon',
                 },
                 
                };
                const response: HttpResponse = await Http.get(options);
                
                return response;
              };




      quien =  async (token: string) => {
        const options = {
          url: 'http://localhost:3000/whoAmI',
         headers: { 
          accept: 'application/jseon',
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + token
         },
         
        };
        const response: HttpResponse = await Http.get(options);
        return response;
      };


logout() {
  

}

}
