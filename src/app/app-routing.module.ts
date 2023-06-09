import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegClientsComponent } from './reg-clients/reg-clients.component';

const routes: Routes = [
  {
    path:"",pathMatch:"full",component:RegClientsComponent
  },
  {
    path:"register",component:RegClientsComponent
  },
  {
    path:"login",component:LoginComponent
  },
{
  path:"regClients",component:RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
