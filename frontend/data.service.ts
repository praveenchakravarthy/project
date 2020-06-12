import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dataModel } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   private readonly URL:string="localhost:3000/customers";
   constructor(private http:HttpClient) { }
 
   Create(data:dataModel):Observable<dataModel>
   {
     return this.http.post<dataModel>(this.URL,data);
   }
   Getall():Observable<dataModel[]>
   {
     return this.http.get<dataModel[]>(this.URL);
   }
 }
 