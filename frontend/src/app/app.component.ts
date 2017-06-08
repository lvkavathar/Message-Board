import { Component} from '@angular/core';
import { MessagesComponent } from './messages.component'
import { NewMessageComponent } from './new-message.component'
import { NavComponent } from "./nav.component";

@Component({
  selector: 'my-app',
  template: `
  <nav></nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent  {
}
