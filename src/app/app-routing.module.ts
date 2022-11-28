import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MesasComponent } from './components/login/mesas/mesas.component';

const routes: Routes = [
{
  path: "login",
  component: LoginComponent,
},
{
  path: "mesas",
  component: MesasComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
