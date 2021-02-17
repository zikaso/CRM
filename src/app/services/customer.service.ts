import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public  Host:string
  constructor( private  httpClient:HttpClient) { }

  public  getResource( url){
     return this.httpClient.get(url);
  }
}
