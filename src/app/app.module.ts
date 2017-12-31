import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularUpload} from '@angular/angular-upload';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewpostComponent } from './newpost/newpost.component';
import { PostedComponent } from './posted/posted.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [ //components
    AppComponent,
    HomeComponent,
    NewpostComponent,
    PostedComponent,
    AccountComponent
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //services here
  bootstrap: [AppComponent]
})
export class AppModule { }
