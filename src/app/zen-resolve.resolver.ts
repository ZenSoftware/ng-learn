import { ResolveFn } from '@angular/router';
import { EMPTY, of } from 'rxjs';

export interface ResolvedData {
  id: number;
}

export const zenResolveResolver: ResolveFn<ResolvedData> = (route, state) => {
  console.log('zenResolveResolver');

  if (true) {
    return of({
      id: 1,
    });
  } else {
    return EMPTY;
  }
};
