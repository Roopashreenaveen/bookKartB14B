import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book-column',
  templateUrl: './book-column.component.html',
  styleUrls: ['./book-column.component.scss']
})
export class BookColumnComponent implements OnInit {

  posts:any;
 
 
  url="https://bookcart.azurewebsites.net/Upload/"
  dat = ""
  constructor(private book_details:DataService ){
}
  ngOnInit(): void {
     this.book_details.getel().subscribe((data)=>{
    this.posts =  data
    })}
    

  




}