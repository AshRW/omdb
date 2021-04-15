import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { OmdbService } from '../services/omdb.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private omdb:OmdbService, private router:Router, private spinner:NgxSpinnerService) { }
  movieDetails:any
  ngOnInit(): void {
    this.spinner.show();
    if(this.omdb.whichMovieById==null){
      if(localStorage.length>0){
        this.omdb.whichMovieById=localStorage.getItem("movieById");
        // this.spinner.hide();
      }
    }
    else{
      // console.log("else");
      // this.spinner.hide();
    }
    this.omdb.getwithId(this.omdb.whichMovieById).subscribe(success=>{
      this.movieDetails=success;
      console.log(success);
      this.spinner.hide();
    })
    // console.log(this.movieDetails);
  }

}
