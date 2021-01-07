import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateBookComponent} from './controller/create-book/create-book.component';
import {ListBookComponent} from './controller/list-book/list-book.component';
import {EditBookComponent} from './controller/edit-book/edit-book.component';
import {DeleteBookComponent} from './controller/delete-book/delete-book.component';
import {DetailBookComponent} from './controller/detail-book/detail-book.component';

const routes: Routes = [
  {path: "create-book", component: CreateBookComponent},
  {path: "", component: ListBookComponent},
  {path: "edit-book/:id", component: EditBookComponent},
  {path: "delete-book/:id", component: DeleteBookComponent},
  {path: "detail-book/:id", component: DetailBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
