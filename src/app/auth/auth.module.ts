import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [AngularFireAuthModule, SharedModule, AuthRoutingModule],
  exports: [],
})
export class AuthModule {}
