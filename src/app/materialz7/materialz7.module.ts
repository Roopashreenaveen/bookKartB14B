import { NgModule } from '@angular/core';

// import all needed material modules
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatListModule} from '@angular/material/list';
import {MatDividerModule } from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';




// pass the modudes in a single constant array 
const matz7 = [
  MatToolbarModule,
  MatBadgeModule,
  MatButtonModule,
  MatGridListModule,
  MatSidenavModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDividerModule,
  MatSliderModule,
  MatCardModule
];

//provoiding the constant array matz7 to imports and exports

@NgModule({

  imports: [
    matz7
 
  ],
  exports: [
    matz7
  ]

})
export class Materialz7Module { }
