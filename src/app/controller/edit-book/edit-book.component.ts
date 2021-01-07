import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  book: Book = {};
  id: number;

  constructor(private bookService:BookService,
              private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getBookById(this.id);
    });
  }

  ngOnInit(): void {
  }

  getBookById(id:number) {
    this.bookService.getBookById(id).subscribe(book => this.book = book);
  }

  editBook(id:number) {
this.bookService.editBook(id, this.book).subscribe(book => this.book = book);
  }
}
