import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import * as Services from '../services/index';
import * as Components from '../components/index';
import * as Directives from '../directives/index';

@NgModule({
  declarations: [
    AppComponent,
    Components.ChatComponent,
    Directives.OnAppExitDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Services.ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
