import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OmdbService } from '../services/omdb.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private omdb:OmdbService, private router:Router) { }
  movieDetails:any
  ngOnInit(): void {
    if(this.omdb.whichMovieById==null){
      if(localStorage.length>0){
        this.omdb.whichMovieById=localStorage.getItem("movieById");
      }
    }
    else{
      console.log("else");
    }
    this.omdb.getwithId(this.omdb.whichMovieById).subscribe(success=>{
      this.movieDetails=success;
      console.log(success);
    })
    // console.log(this.movieDetails);
  }

}
