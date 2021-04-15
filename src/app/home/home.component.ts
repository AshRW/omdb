import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { OmdbService } from '../services/omdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private omdb:OmdbService, private router:Router, private spinner:NgxSpinnerService) { }

  searchForm=new FormGroup({
    moviename:new FormControl('', Validators.required)
  })
  searchResult:any=[];
  myMovies:any=[];

  ngOnInit(): void {
    // this.omdb.getMyFavMovies()
    // this.myMovies=this.omdb.myFavMovies;
    this.myMovies=this.omdb.myFavMovies2;
    // console.log(this.myMovies)
  }

  searchWithTitle(){
    this.spinner.show();
    var name=this.searchForm.value.moviename
    var data:any;

    this.omdb.getwithTitle(name).subscribe(success=>{
        // console.log(success);
        data=success;
        if(data.Response=="False"){
          Swal.fire(
            'Something is Wrong',
            data.Error,
            'error'
          )
          this.spinner.hide();
        }else{
          this.searchResult=success;
          this.spinner.hide();
        }
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
