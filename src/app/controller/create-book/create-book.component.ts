import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  book: Book = {};

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  createNewBook() {
    this.bookService.createNewBook(this.book).subscribe(book => this.book = book);
    this.book = {};
  }
}
