import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private httpCliente: HttpClient) {

   }

   public dados = [];

   public carregaDados(callback){
     return this.httpCliente.get(`https://alfa2019-3a196.firebaseio.com/Veiculos.json`)
     .toPromise().then(response =>{
       this.dados = [];
       Object.keys(response).forEach(key => {
         this.dados.push({
           id:key,
           marca:response[key].marca,
           nome: response[key].nome
         });
         callback();
       });
     }).catch(
      error => console.log("ERROR", error)
     )
     };
    }

