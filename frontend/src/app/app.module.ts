import { NgModule }      from '@angular/core';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { WebService } from './web.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from "./nav.component";
import { HomeComponent } from "./home.component";
import { RegisterComponent } from "./register.component";
import { AuthService } from "./auth.service";

var routes=[
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'messages/:name',
    component: MessagesComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'messages',
    component: MessagesComponent
  }
];

@NgModule({
  imports:      [ ReactiveFormsModule,BrowserModule,HttpModule,MaterialModule,BrowserAnimationsModule,FormsModule,RouterModule.forRoot(routes)],
  declarations: [ AppComponent, MessagesComponent,NavComponent,NewMessageComponent, HomeComponent, RegisterComponent],
  bootstrap:    [ AppComponent ],
  providers: [WebService]
})
export class AppModule { }
