import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewAllComponent } from './view-all/view-all.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

const routes: Routes = [
  {path: 'new', component: AddComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'viewAll', component: ViewAllComponent},
  {path: '', pathMatch: 'full', redirectTo: '/viewAll'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
