import {Component, OnInit} from '@angular/core';
import {CustomerService} from "./services/customer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'CRM';


  constructor( private customerService:CustomerService  ) {

  }

  ngOnInit(): void {
       this.customerService.getResource("http://localhost:8080/customers").subscribe( value => {
              console.log("okkkkkkk")
       },error => {
            console.log("nnnnnnnnnnn")
       })
  }
}
