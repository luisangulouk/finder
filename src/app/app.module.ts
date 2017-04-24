import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';
import { AgmCoreModule } from "angular2-google-maps/core";

import { AppComponent } from './app.component';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';

const globalOptions = {
    googleKey:'AIzaSyC_GQr26OpoDYg_QJgL8QUPClxCquMIt0M'
};

@NgModule({
  declarations: [
    AppComponent,
    GooglemapsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyC_GQr26OpoDYg_QJgL8QUPClxCquMIt0M",
      libraries: ["places"]
    }),
  ],
  providers: [
    { provide: 'global_options', useValue: globalOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
