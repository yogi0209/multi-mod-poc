import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'backoffice', loadChildren: './backoffice/backoffice.module#BackofficeModule'},
  {path: 'app', loadChildren: './lib/lib.module#LibModule'},
  {path: '', redirectTo: 'app', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
