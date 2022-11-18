import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { Meet } from '../model/Meet';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URI: string = 'http://localhost:8080/meet-api/v1'
  constructor(private httpClient:HttpClient) { }

  getUsuarios(){
    return this.httpClient.get(this.URI+"/user/read")
  }
}
