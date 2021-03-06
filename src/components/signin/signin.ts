import {Component, OnInit} from '@angular/core';
import {
    AuthService,
    FacebookLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'signin',
  templateUrl: 'signin.html'
})


export class SigninComponent implements OnInit {

  constructor( private socialAuthService: AuthService ) {}

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } /*else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } */

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...

      }
    );
  }

  teste(variavel){
    alert(variavel);
  }

  ngOnInit(): void{}

}
