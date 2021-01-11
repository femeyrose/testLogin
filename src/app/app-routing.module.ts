import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',component: HomeComponent,
  
  },
  {
    path:'reg',component: RegisterComponent,
  
  },
  {
    path:'nav',component: NavbarComponent,
  
  },
  {
    path:'side',component: SidebarComponent,
  
  },
  {
    path:'user',component: UsersComponent,
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
