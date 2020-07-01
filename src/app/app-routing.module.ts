import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SecuredPageComponent } from './pages/secured-page/secured-page.component';
import { AuthenticationGuardService } from './authentication-guard.service';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'secured', component: SecuredPageComponent, canActivate: [AuthenticationGuardService]},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
