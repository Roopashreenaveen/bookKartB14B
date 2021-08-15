import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-x7',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //test theme = "main_nav_bar_white"
  theme_color = "primary"
  //test red = "red"

  // theme_change(){
  //   if ( this.theme_color == "accent"){
  //     //test this.theme = "main_nav_bar_dark"
  //     this.theme_color = "primary"

  //   }
  //   else if (this.theme_color== "primary"){
  //     //test this.theme = "main_nav_bar_white"
  //     this.theme_color = "accent"
    // }

  // }

}
