import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }    from './home/home.component';
import { NewpostComponent } from './newpost/newpost.component';
import { PostedComponent }  from './posted/posted.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
//   { path: 'detail/:id', component: NewpostComponent },
  { path: 'newpost', component: NewpostComponent },
  { path: 'posted', component: PostedComponent },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
