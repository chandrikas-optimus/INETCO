import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {TranslateService, TranslateLoader, TranslateStaticLoader}from 'ng2-translate/ng2-translate';
import { HTTP_PROVIDERS, Http } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    {
    provide: TranslateLoader,
    useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
    deps: [Http]
  },
  TranslateService
]);
