import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
authors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllAuthors();
  }
    getAllAuthors(){
      let obs = this._httpService.getAllAuthors();
      obs.subscribe(data => {
        console.log("Loading all authors", data)
        this.authors = data["info"]
    })
  }
  deleteAuthor(id:string){
    console.log("got to delete author")
    let obs = this._httpService.deleteAuthor(id);
    obs.subscribe(data=> {
      console.log("Deleting author")
      this.getAllAuthors();
    })
  }
}
