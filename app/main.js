"use strict";
//RC5 Import Method - Working.
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var core_1 = require('@angular/core');
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
// Don't need RC4 anymore, keep commented for reference only.
//RC4 Import Method - will run currently but ngModel is still unavailable going the RC4 approach.
// import {bootstrap} from '@angular/platform-browser-dynamic'
// import {appRouterProviders} from './app.routes'
// import {AppComponent} from './app.component'
// import {disableDeprecatedForms, provideForms} from '@angular/forms'
// bootstrap(AppComponent, [
// 	appRouterProviders,
// 	disableDeprecatedForms(),
// 	provideForms()
// 	]);
//# sourceMappingURL=main.js.map