import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './containers/main-header/main-header.component';
import { DesktopComponent } from './containers/desktop/desktop.component';
import { WebComponent } from './containers/web/web.component';
import { MobileComponent } from './containers/mobile/mobile.component';

import {routes} from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    DesktopComponent,
    WebComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
