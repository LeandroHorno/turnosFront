import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, observable } from 'rxjs';
import { Electrodomestico } from '../model/Electrodomestico';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URI: string = 'http://localhost:8080/meet-api/v1'

  private HttpHeaders  = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private httpClient:HttpClient) { }

  //data es la clave-valor que contiene el objeto
  getElectrodomesticos():Observable<any>{
    return this.httpClient.get(this.URI+"/electrodomesticos/read",{headers:this.HttpHeaders}).pipe(
      map((data:any)=> data.data),
      catchError((err)=> {
          return err;
        }
      )
    ) ;       
 }
}
