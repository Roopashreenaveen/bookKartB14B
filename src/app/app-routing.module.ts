import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent }from './home/home.component';
import {LoginComponent} from './login/login.component' ;
import {ShopcartComponent} from './shopcart/shopcart.component';

const routes: Routes = [
 {path: '', redirectTo: 'home', pathMatch: 'full'},
 {path: 'home', component: HomeComponent},
 {path: 'login', component: LoginComponent},
 {path: 'shopping_cart', component: ShopcartComponent}
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
