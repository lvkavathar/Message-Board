import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core'
import { MdSnackBar } from '@angular/material';
import { Subject } from "rxjs/Rx";
@Injectable()
export class WebService
{
    BASE_URL = 'http://localhost:4505/api'
   messages=[];
   constructor(private http:Http, private sb : MdSnackBar){
       this.getMessages();
   } 
   getMessages(user)
   {
      
        user = (user) ? '/' + user:'';
        this.http.get( this.BASE_URL + "/messages" + user).subscribe(response => {
         this.messages = response.json();
        },error => {
            console.error("Unable to get message");
           this.sb.open("Unable to get message",'close',{duration: 2000});
        }
        );
       
      
    } 
    
   async postMessages(message)
   {
       try {
       var response = await this.http.post(this.BASE_URL + "/message",message).toPromise();
       this.messages.push(response.json());    
       } catch (error) {
           console.error("Unable to get message");
           this.sb.open("Unable to get message",'close',{duration: 2000});
       }
  
   }
}