import { Component, OnInit } from '@angular/core';
// import { Directive } from '@angular/core';

// @Directive({
//   selector:"[ccCardHover]"
// })

// class CardHoverDirective { }
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  filename = "fileName.js";

  constructor() { }

  ngOnInit() {
  }

}
