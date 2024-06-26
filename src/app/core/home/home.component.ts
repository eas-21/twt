import { Component, OnInit,Inject } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myArray=[
    {
      "id":1
    },
    {
      "id":2
    },
    {
      "id":3
    },
    {
      "id":4
    }
    ]
  public last: any;
  constructor(private wowService: NgwWowService, @Inject(DOCUMENT) private document: Document,private router: Router) { }

  ngOnInit(): void {
    this.wowService.init();
  }
  gotoPage(data: any){
    console.log("output", data );
    this.router.navigateByUrl(data);
  }
  gotoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;   
  } 
}
