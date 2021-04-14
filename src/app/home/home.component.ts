import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OmdbService } from '../services/omdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private omdb:OmdbService, private router:Router) { }

  searchForm=new FormGroup({
    moviename:new FormControl('', Validators.required)
  })
  searchResult:any=[];

  ngOnInit(): void {

  }

  searchWithTitle(){
    var name=this.searchForm.value.moviename
    // console.log(name);
    this.omdb.getwithTitle(name).subscribe(success=>{
        console.log(success);
        this.searchResult=success;
      })
    this.searchForm.reset();
    }


    selectMovie(index){
      // console.log(this.searchResult.Search[index].imdbID)
      this.omdb.whichMovieById=this.searchResult.Search[index].imdbID;
      localStorage.setItem("movieById",this.searchResult.Search[index].imdbID);
      this.router.navigate(['movie']);
    }

}
