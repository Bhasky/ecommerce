import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './frontEnd/header/header.component';
import { HomeComponent } from './frontEnd/home/home.component';
import { SliderComponent } from './frontEnd/home/slider/slider.component';
import { NewArrivalsComponent } from './frontEnd/home/new-arrivals/new-arrivals.component';
import { UserLoginComponent } from './frontEnd/user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    NewArrivalsComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
