import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { fakeBackendProvider } from './_helpers';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarwarsService } from './services/starwars.service';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { LoginComponent, RegisterComponent } from './account';
import { HomeComponent } from './components/home/home.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsListComponent,
    StarshipDetailComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    StarwarsService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
