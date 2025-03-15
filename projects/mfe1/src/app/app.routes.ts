import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooComponent } from '../components/foo/foo.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'foo',
  pathMatch: 'full'
}, {
  path: 'foo',
  component: FooComponent
}, {
  path: '**',
  redirectTo: 'foo'
}];
