import { inject } from '@angular/core';
import {
  CanActivateFn,
  CanMatchFn,
  CanDeactivateFn,
  CanActivateChildFn,
  ResolveFn,
} from '@angular/router';
import { Environment } from '../environments';
import { SampleComponent } from './sample/sample.component';

export const ZenDevGuard: CanActivateChildFn = (childRoute) => {
  // const env = inject(Environment);
  console.log('DevGuard: CanActivateChildFn');
  return false;
};
