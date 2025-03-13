import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'component',
  pathMatch: 'full'
}, {
  path: 'component',
  component: AppComponent
}, {
  path: '**',
  redirectTo: 'component'
}];
