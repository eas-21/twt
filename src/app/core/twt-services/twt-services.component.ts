import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twt-services',
  templateUrl: './twt-services.component.html',
  styleUrls: ['./twt-services.component.css']
})
export class TwtServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gotoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;   
  } 
}
