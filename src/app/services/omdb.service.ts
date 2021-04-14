import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  url="http://www.omdbapi.com/?apikey=49f8abf4"
  whichMovieById:any;

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
}
