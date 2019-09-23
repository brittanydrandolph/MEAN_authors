import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newAuthor: any;
  response: any;
  error: String;

  constructor(
    private _httpService: HttpService,    
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newAuthor = { 'name':""};
    this.error="";
  }
  authorSubmit(){
    let obs = this._httpService.addAuthor(this.newAuthor);
    obs.subscribe((data:any) =>{
      if(data.error){
        this.error = data.error.err.name.message
      }
      else{
        console.log("--create author from add.component")
        this.newAuthor = {name: ""}
      }
    })
  }
}
