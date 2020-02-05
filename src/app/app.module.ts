import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppHttpService } from './services/app-http.service';
import { AuthService } from './services/auth.service';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { FrontComponent } from './front/front.component';
import { SidenavdemoComponent } from './sidenavdemo/sidenavdemo.component';
import { DishdetailsComponent } from './dishdetails/dishdetails.component';

import {DishService} from './services/dish.service';
import { HeaderComponent } from './header/header.component';
 



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    ContactComponent,
    LogoutComponent,
    BannerComponent,
    FooterComponent,
    FrontComponent,
    SidenavdemoComponent,
    DishdetailsComponent,
    HeaderComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  
    
  ],
  providers: [
    AppHttpService, AuthService,DishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
