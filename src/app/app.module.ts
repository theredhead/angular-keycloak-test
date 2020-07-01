import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from '../app/init';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SecuredPageComponent } from './pages/secured-page/secured-page.component';

// const keycloakService = new KeycloakService();

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,
    SecuredPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
  ],
  providers: [],
  entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private keycloakService:  KeycloakService) {

  }
  ngDoBootstrap(application: ApplicationRef) {
    this.keycloakService
      .init({config: '/assets/keycloak.json'})
      .then(() => {
        console.log('[ngDoBootstrap] bootstrap app');

        application.bootstrap(AppComponent);
      })
      .catch((error) =>
        console.error('[ngDoBootstrap] init Keycloak failed', error)
      );
  }
}
