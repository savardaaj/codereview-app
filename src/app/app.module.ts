import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularUpload} from '@angular/angular-upload';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewpostComponent } from './newpost/newpost.component';
import { PostedComponent } from './posted/posted.component';
import { AccountComponent } from './account/account.component';
import { SigninUpComponent } from './signin-up/signin-up.component';
import { MessageService }       from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AccountService } from './account.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ //components
    AppComponent,
    HomeComponent,
    NewpostComponent,
    PostedComponent,
    AccountComponent,
    SigninUpComponent,
    MessagesComponent
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AccountService, MessageService], //services here
  bootstrap: [AppComponent]
})
export class AppModule { }
