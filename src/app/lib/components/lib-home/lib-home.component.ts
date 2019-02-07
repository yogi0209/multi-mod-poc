import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'lib-app',
  templateUrl: './lib-home.component.html',
  styleUrls: ['./lib-home.component.scss']
})
export class LibHomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('lib home..');
    console.log('logout', this.router.url);
  }

}
