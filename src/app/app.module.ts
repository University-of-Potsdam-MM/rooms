import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ConfigComponentModule} from './config/config.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ConfigService} from './services/config/config.service';
import {TimerService} from './services/timer/timer.service';
import {ApiService, AuthorizationInterceptor} from './services/api/api.service';
import {LayoutModule, MediaMatcher} from '@angular/cdk/layout';
import {Platform} from '@angular/cdk/platform';
import {IonicStorageModule} from '@ionic/storage';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {environment} from '../environments/environment';

export function TranslateLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function initConfig(config: ConfigService) {
    return () => config.load('assets/config.json');
}

@NgModule({
  declarations: [
      AppComponent
  ],
  entryComponents: [
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ConfigComponentModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    LoggerModule.forRoot({
      level: environment.production ? NgxLoggerLevel.WARN : NgxLoggerLevel.DEBUG,
      // serverLoggingUrl: '/api/logs',
      // serverLogLevel: NgxLoggerLevel.OFF,
      enableSourceMaps: true,
      disableConsoleLogging: environment.production
    }),
    TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: (TranslateLoaderFactory),
              deps: [HttpClient]
          }
      })
  ],
  exports: [
    LayoutModule,
    TranslateModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConfigService,
    TimerService,
    ApiService,
    Title,
    MediaMatcher,
    Platform,
    LayoutModule,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [ConfigService],
      multi: true
    },
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
      deps: [ConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
