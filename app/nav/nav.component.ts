import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  constructor() {


  }
   links = [
    "link1",
    "link2",
    "link3"
  ];

  ngOnInit() {
  }

}
