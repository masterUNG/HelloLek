import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  private title: string;
  private nameString: string;

  ngOnInit(): void {
    this.title = 'app master';
    this.nameString = 'This is app Component Main'
  }
} // AppComponent Class
