import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { HomeComponent } from './home/home.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  { path: 'add-task', component: AddTaskComponent },
  { path: 'view-task', component: ViewTaskComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
