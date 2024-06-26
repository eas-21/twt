import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function menu(): any;
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    menu();
  }
  goto(routePage: string) {
    this.router.navigateByUrl(routePage);
  }
}
