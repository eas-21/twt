import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { HomeComponent } from './core/home/home.component';
import { TwtServicesComponent } from './core/twt-services/twt-services.component';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';
import { IotComponent } from './core/twt-services/iot/iot.component';
import { ContactsComponent } from './core/contacts/contacts.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeComponent,
    TwtServicesComponent,
    ScrollToTopComponent,IotComponent, ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
