import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
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

