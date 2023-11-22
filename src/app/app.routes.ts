import { Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { ZenDevGuard } from './zen-dev.guard';
import { LilyComponent } from './lily/lily.component';
import { zenResolveResolver } from './zen-resolve.resolver';

export const routes: Routes = [
  {
    path: 'sample',
    component: SampleComponent,
    canActivateChild: [ZenDevGuard],
    resolve: {
      zen: zenResolveResolver,
    },
    children: [
      {
        path: 'lily',
        component: LilyComponent,
      },
    ],
  },
];
