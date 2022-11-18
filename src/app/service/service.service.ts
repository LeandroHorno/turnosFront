import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { Electrodomestico } from '../model/Electrodomestico';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URI: string = 'http://localhost:8080/meet-api/v1'
  constructor(private httpClient:HttpClient) { }

  getElectrodomesticos(){
    return this.httpClient.get(this.URI+"/electrodomesticos/read")
  }
}
