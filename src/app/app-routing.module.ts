import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }    from './home/home.component';
import { NewpostComponent } from './newpost/newpost.component';
import { PostedComponent }  from './posted/posted.component';
import { AccountComponent } from './account/account.component';
import { SigninUpComponent } from './signin-up/signin-up.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
//   { path: 'detail/:id', component: NewpostComponent },
  { path: 'newpost', component: NewpostComponent },
  { path: 'posted', component: PostedComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account/:id', component: AccountComponent },
  { path: 'signin-up', component: SigninUpComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
