import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListtasksComponent } from './listtasks/listtasks.component';
import { ListprojectsComponent } from './listprojects/listprojects.component';

const routes: Routes = [
  { path : 'tasks' , component : ListtasksComponent },
  { path : 'projects' , component : ListprojectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
