import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'backOffice-dashboard',
  templateUrl: './back-office-dashboard.component.html',
  styleUrls: ['./back-office-dashboard.component.scss']
})
export class BackOfficeDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('BackOfficeDashboardComponent');
  }

}
