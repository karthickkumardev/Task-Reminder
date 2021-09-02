import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {path:'',redirectTo: './tasks', pathMatch: 'full'},
  {path:'auth',component:AuthComponent},
  {path:'notification',component:NotificationComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
