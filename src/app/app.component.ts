import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {filter} from 'rxjs/internal/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'multi-module-poc';

  navigationEnd: Observable<NavigationEnd>;

  featureModulesArray: string[] = ['app', 'backoffice'];
  currentModule = '';

  constructor(private router: Router) {
    this.navigationEnd = router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  ngOnInit() {
    this.navigationEnd.subscribe(event => {
      console.log(event.url, 'Navigation End...');
      const url: string = event.url;
      for (let i = 0; i < this.featureModulesArray.length; i++) {
        if (url.startsWith(this.featureModulesArray[i], 1)) {
          this.currentModule = this.featureModulesArray[i];
          break;
        }
      }
      console.log('currentModule', this.currentModule);
    });
  }

}
