import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {
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
    this.getBookById(this.id);
  }

  getBookById(id:number) {
    this.bookService.getBookById(id).subscribe(book => this.book = book);
  }
}
