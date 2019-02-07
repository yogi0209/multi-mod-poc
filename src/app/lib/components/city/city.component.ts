import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter} from 'rxjs/internal/operators';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.queryParams.pipe(
      filter(params => params.showPaid)
    ).subscribe(param => {
      console.log('param', param.showPaid);
      if (param.showPaid === 'true') {
        console.log('inside if');
      }
    });
  }

}
