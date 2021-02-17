import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RoutingModuleModule} from "./routing-module/routing-module.module";
import { CutomerComponent } from './cutomer/cutomer.component';



@NgModule({
  declarations: [
    AppComponent,
    CutomerComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
