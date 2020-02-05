import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: '',
  component: LoginComponent
}, {
  path: 'contact',
  component: ContactComponent

},{
  path: 'logout',
  component: LogoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
