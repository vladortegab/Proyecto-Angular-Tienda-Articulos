import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { ChangeDetectorRef } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthGoogleService {
  constructor(private oauthService: OAuthService) {
    this.initLogin();
  }

  initLogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      redirectUri: window.location.origin + '/main',
      strictDiscoveryDocumentValidation: false,
      clientId:
        'tus credenciales',
      scope: 'openid profile email',
    };
    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

  }
  login() {
    this.oauthService.initLoginFlow();

  }
  
  
  logout() {
    this.oauthService.logOut();
    //this.updateAuthenticationState();

  }

  getProfile() {
    return this.oauthService.getIdentityClaims();
  }
  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
   
  }
  

}
