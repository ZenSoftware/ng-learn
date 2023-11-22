import { Injectable } from '@angular/core';
import { IEnvironment } from './environment.intertface';

@Injectable({ providedIn: 'root' })
export class Environment implements IEnvironment {
  isProduction = false;
}
