import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListtasksComponent } from './listtasks/listtasks.component';
import { ListprojectsComponent } from './listprojects/listprojects.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : '' , redirectTo : 'login', pathMatch : 'full' }, 
  { path : 'login' , component : LoginComponent },
  { path : 'tasks' , component : ListtasksComponent },
  { path : 'projects' , component : ListprojectsComponent },
  { path : '**' , component : NotFoundComponent }, // le ** est pour any  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
