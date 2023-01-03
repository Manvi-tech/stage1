import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit{
  messageText:string='Welcome to angular content projection'
  constructor() { }

  ngOnInit(): void {
  }
}
