import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { hmrBoot } from '../../nzlib/src/nzlib.hmr';

if (environment.production) {
  enableProdMode();
}

const bts = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (!environment.production) {
  hmrBoot(module, bts);
} else {
  bts();
}
