import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LibHomeComponent} from './components/lib-home/lib-home.component';
import {LibDashboardComponent} from './components/lib-dashboard/lib-dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {CityComponent} from './components/city/city.component';

const libRoutes: Routes = [
  {
    path: '', component: LibHomeComponent, children:
    [
      {path: 'dashboard', component: LibDashboardComponent},
      {path: 'city', component: CityComponent}
      /*{path: '', redirectTo: 'dashboard', pathMatch: 'full'}*/
    ]
  }
];

@NgModule({
  declarations: [LibHomeComponent, LibDashboardComponent, CityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(libRoutes)
  ],
  bootstrap: [LibHomeComponent],
  exports: [RouterModule]
})
export class LibModule {
}
