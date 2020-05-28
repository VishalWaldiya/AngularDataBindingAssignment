import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBindingAssignment';
  username="";

  isUsername(){
    if (this.username.length) {
      return false;
    } else {
      return true;
    }
  }

  reset(){
    this.username="";
  }
}
