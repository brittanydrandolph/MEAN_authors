import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Favorite authors';
  authors = [];
  author = "";
  newAuthor: any;
  editAuthor: any;

  constructor(private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,){}
  ngOnInit(){
    this._router.navigate(["/"])
  }
}
