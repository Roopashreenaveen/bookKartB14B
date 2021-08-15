import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url="https://bookcart.azurewebsites.net/api/Book"
  constructor(private http:HttpClient) { 
    
  }
  getel(){
    return this.http.get(this.url)
  }
}
