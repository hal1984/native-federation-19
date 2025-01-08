import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { DummyComponent } from '../dummy/dummy.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => loadRemoteModule({
      remoteName: 'mfe1',
      exposedModule: './Component',
      fallback: DummyComponent
    }).then(m => m.AppComponent)
  }
];
