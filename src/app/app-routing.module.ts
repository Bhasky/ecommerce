import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './frontEnd/home/home.component';
import { LoginComponent } from './admin/login/login.component';



const routes: Routes = [
  /*Admin Section*/
  {
    path: 'manage',
    component: LoginComponent,
  },
  {
    component: HomeComponent,
    path: '',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
