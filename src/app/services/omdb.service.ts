import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  url="https://www.omdbapi.com/?apikey=49f8abf4"
  whichMovieById:any;
  myFavMovies:any=[];
  myFavMovies2=[
    {
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Awards: "Won 1 Oscar. Another 43 wins & 148 nominations.",
    BoxOffice: "$188,020,017",
    Country: "USA, UK, Canada",
    DVD: "24 May 2016",
    Director: "Christopher Nolan",
    Genre: "Adventure, Drama, Sci-Fi",
    Language: "English",
    Metascore: "74",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Production: "Syncopy, Lynda Obst Productions",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Response: "True",
    Runtime: "169 min",
    Title: "Interstellar",
    Type: "movie",
    Website: "N/A",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Year: "2014",
    imdbID: "tt0816692",
    imdbRating: "8.6",
    imdbVotes: "1,530,614"
  },
  {
    Actors: "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
Awards: "9 wins & 23 nominations.",
BoxOffice: "$256,393,010",
Country: "USA",
DVD: "01 Dec 2009",
Director: "Francis Lawrence",
Genre: "Action, Adventure, Drama, Sci-Fi, Thriller",
Language: "English",
Metascore: "65",
Plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
Poster: "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
Production: "Weed Road Pictures, Village Roadshow Pictures, Overbrook Entertainment",
Rated: "PG-13",
Released: "14 Dec 2007",
Response: "True",
Runtime: "101 min",
Title: "I Am Legend",
Type: "movie",
Website: "N/A",
Writer: "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
Year: "2007",
imdbID: "tt0480249",
imdbRating: "7.2",
imdbVotes: "691,759"
  },
  {
    Actors: "Eddie Murphy, Judge Reinhold, John Ashton, Lisa Eilbacher",
Awards: "Nominated for 1 Oscar. Another 4 wins & 4 nominations.",
BoxOffice: "$234,760,478",
Country: "USA",
DVD: "06 Jun 2014",
Director: "Martin Brest",
Genre: "Action, Comedy, Crime, Thriller",
Language: "English",
Metascore: "66",
Plot: "A freewheeling Detroit cop pursuing a murder investigation finds himself dealing with the very different culture of Beverly Hills.",
Poster: "https://m.media-amazon.com/images/M/MV5BN2MyZDE0YjAtNWFjYy00MWRlLTk3MTktMzY3ZDVhNTJkZTlmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
Production: "Paramount Pictures",
Rated: "R",
Released: "05 Dec 1984",
Response: "True",
Runtime: "105 min",
Title: "Beverly Hills Cop",
Type: "movie",
Website: "N/A",
Writer: "Daniel Petrie Jr. (screenplay by), Danilo Bach (story by), Daniel Petrie Jr. (story by)",
Year: "1984",
imdbID: "tt0086960",
imdbRating: "7.3",
imdbVotes: "165,651"
  },
  {
    Actors: "Leonardo DiCaprio, Djimon Hounsou, Jennifer Connelly, Kagiso Kuypers",
Awards: "Nominated for 5 Oscars. Another 8 wins & 27 nominations.",
BoxOffice: "$57,377,916",
Country: "USA, Germany, UK",
DVD: "30 Nov 2008",
Director: "Edward Zwick",
Genre: "Adventure, Drama, Thriller",
Language: "English, Mende, Afrikaans",
Metascore: "64",
Plot: "A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.",
Poster: "https://m.media-amazon.com/images/M/MV5BZDMxOGZhNWYtMzRlYy00Mzk5LWJjMjEtNmQ4NDU4M2QxM2UzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
Production: "Virtual Studios, Warner Bros., Spring Creek Productions, Bedford Falls Productions",
Rated: "R",
Released: "08 Dec 2006",
Response: "True",
Runtime: "143 min",
Title: "Blood Diamond",
Type: "movie",
Website: "N/A",
Writer: "Charles Leavitt (screenplay), Charles Leavitt (story), C. Gaby Mitchell (story)",
Year: "2006",
imdbID: "tt0450259",
imdbRating: "8.0",
imdbVotes: "503,009"
  }
    ]

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get(this.url+"&i=tt3896198");
  }
  getwithTitle(title){
    return this.http.get(this.url+"&s="+title);
  }
  getwithId(id){
    return this.http.get(this.url+"&i="+id);
  }

  getMyFavMovies(){
    this.getwithId("tt0816692").subscribe(success=>{
      this.myFavMovies.push(success);
    })
    this.getwithId("tt0450259").subscribe(success=>{
      this.myFavMovies.push(success);
    })
    this.getwithId("tt0086960").subscribe(success=>{
      this.myFavMovies.push(success);
    })
    this.getwithId("tt0480249").subscribe(success=>{
      this.myFavMovies.push(success);
    })
  }
}
