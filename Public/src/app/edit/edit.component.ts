import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
author: object;
// editName: any;
error: any;

  constructor(
    private _httpService: HttpService,    
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    // this.editName = {'name': ""};
    this.author = {'name': ""};
    this.findAuthor();
    }
    findAuthor(){
      this._route.params.subscribe((params) => {
        let obs = this._httpService.getOneAuthor(params["id"]);
        obs.subscribe((data:any)=>{
          console.log(data)
          this.author = data.author;
        })
      })
    }
    editSubmit(){
      this._route.params.subscribe((params)=>{
        let obs = this._httpService.editAuthor(params['id'], this.author)
        obs.subscribe((data:any) =>{
          if (data.error){
            this.error = data.error.errors.name.message
          }
          else{
            console.log("completed edit");
            this._router.navigate(["/"])
          }
        })
      })
    }
}
