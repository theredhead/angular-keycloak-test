import { Component, OnInit } from '@angular/core';
import { AuthenticationGuardService } from 'src/app/authentication-guard.service';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-secured-page',
  templateUrl: './secured-page.component.html',
  styleUrls: ['./secured-page.component.scss']
})
export class SecuredPageComponent implements OnInit {
  profile: KeycloakProfile = {};

  constructor(private auth: AuthenticationGuardService) { }

  ngOnInit(): void {
    this.auth.loadProfile.then(profile => {
      this.profile = profile;
    });
  }

}
