import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserMenuComponent } from './user-menu/user-menu.component';


const routes: Routes =[
  { path: '', component: UserFormComponent},
  { path: 'menu', component: UserMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
