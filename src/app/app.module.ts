import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GornjiElementComponent } from './gornji-element/gornji-element.component';
import { DonjiElementComponent } from './donji-element/donji-element.component';

@NgModule({
  declarations: [
    AppComponent,
    GornjiElementComponent,
    DonjiElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
