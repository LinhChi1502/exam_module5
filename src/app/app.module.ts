import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateBookComponent } from './controller/create-book/create-book.component';
import { ListBookComponent } from './controller/list-book/list-book.component';
import { EditBookComponent } from './controller/edit-book/edit-book.component';
import { DeleteBookComponent } from './controller/delete-book/delete-book.component';
import { DetailBookComponent } from './controller/detail-book/detail-book.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    ListBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    DetailBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
