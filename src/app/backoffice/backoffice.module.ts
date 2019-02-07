import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackOfficeHomeComponent} from './components/back-office-home/back-office-home.component';
import {BackOfficeDashboardComponent} from './components/back-office-dashboard/back-office-dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BsModalModule} from 'ng2-bs3-modal';
import {TabsModule} from 'ngx-bootstrap';
import {AgGridModule} from 'ag-grid-angular';

import {AddressComponent} from './address/address.component';


const backOfficeRoutes: Routes = [
  {
    path: '', component: BackOfficeHomeComponent,
    children: [
      {path: 'dashboard', component: BackOfficeDashboardComponent},
      {path: 'address', component: AddressComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  declarations: [BackOfficeHomeComponent, BackOfficeDashboardComponent, AddressComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(backOfficeRoutes),
    FormsModule,
    BsModalModule,
    TabsModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  bootstrap: [BackOfficeHomeComponent],
  exports: [RouterModule]
})
export class BackofficeModule {
}
