import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { BarComponent } from './components/bar/bar.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mfe1',
    pathMatch: 'full',
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfe1',
        exposedModule: './routes',
        fallback: { routes: [] },
      }).then((m) => m.routes),
  },
  {
    path: 'bar',
    component: BarComponent
  },
  {
    path: '**',
    redirectTo: 'mfe1',
  },
];
