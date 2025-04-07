//import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';

import {exposeAngularComponent} from "@myop/angular-remote";

exposeAngularComponent(AppComponent, 'test-comp-1-dev', async () => {
  return appConfig
}).then();

// exposeAngularComponent(AppComponent, 'test-comp-1-dev', async () => {
//   return appConfig
// }).then();


// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );
