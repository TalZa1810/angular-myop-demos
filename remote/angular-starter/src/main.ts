//import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';

import {appendStyleToHost, exposeAngularComponent, resolveRelativeToModule} from "@myop/angular-remote";
import {UserProfileCardComponent} from "./app/userCard/user-profile-card.component";
import {DemoComponent} from "./app/demoComponent/demo.component";
import { MyopDemoComponent } from './app/myop-demo/myop-demo.component';

exposeAngularComponent(AppComponent, 'test-comp-1-dev', async () => {
  return appConfig
}).then();


exposeAngularComponent(UserProfileCardComponent, 'user-card').then();
exposeAngularComponent(DemoComponent, 'angular-demo').then();

exposeAngularComponent(MyopDemoComponent, 'myop-demo').then();

//http://localhost:4200/src/assets/fonts/priego-regular.otf
const style = `
        @font-face {
            font-family: 'priego';  /* Name you want to use for the font */
            src: url('${resolveRelativeToModule('assets/fonts/priego-regular.otf')}') format('opentype'); /* Path to the OTF file */
            font-weight: normal;
            font-style: normal;
            font-display: block; /* Hide text until the font is loaded */
        }`;

appendStyleToHost(style);


// exposeAngularComponent(AppComponent, 'test-comp-1-dev', async () => {
//   return appConfig
// }).then();


// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );
