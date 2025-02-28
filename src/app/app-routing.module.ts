import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { PageComponent } from './views/page/page.component';

const routes: Routes = [{ path: "Login", component: LoginComponent},
{ path: "Signup", component: SignupComponent},
{ path: "landingPage", component: PageComponent},
{ path: "mainPage", component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
