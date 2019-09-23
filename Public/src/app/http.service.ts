import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAllAuthors(){
    return this._http.get("/authors");
  }
  addAuthor(newAuthor){
    return this._http.post("/authors", newAuthor)
  }
  getOneAuthor(id:string){
    return this._http.get("/editAuthor/"+id);
  }
  editAuthor(id:string, editAuthor:object){
    return this._http.put("/authors/"+id, editAuthor)
  }
  deleteAuthor(id:string){
    return this._http.delete("/delete/"+id)
  }
}
