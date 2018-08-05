import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { ComponentsModule } from '../components/components.module';

import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from "angular-6-social-login";

import { SigninComponent } from '../components/signin/signin'

// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
	      provider: new FacebookLoginProvider("2083225361993650")
        }/*,
        {
          id: GoogleLoginProvider.PROVIDER_ID,
	      provider: new GoogleLoginProvider("Your-Google-Client-Id")
        }*/
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    //ComponentsModule,
    SocialLoginModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SigninComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: AuthServiceConfig,useFactory: getAuthServiceConfigs}
  ]
})
export class AppModule {}
