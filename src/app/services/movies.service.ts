import { Injectable } from '@angular/core';
import { IMovieModel, MovieResponseModel } from './movies';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiKey = "0cb2fc26c41ad75bcad3a58df4608049";
const JwtToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2IyZmMyNmM0MWFkNzViY2FkM2E1OGRmNDYwODA0OSIsInN1YiI6IjY2MDQzMTM3N2Y2YzhkMDE2MzcxNDIwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iXYZFoDC6GEXcJOhkfl01YULfDpWpKhWK0uId_hH4jg";
const api = `https://api.themoviedb.org/3/`;
const headers = new HttpHeaders({
  'Authorization': `Bearer ${JwtToken}`
});

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<MovieResponseModel> {
    return this.http.get<MovieResponseModel>(api + "trending/movie/day?Language=en-US", { headers: headers });
  }

  // get(id: number): Observable<IMovieModel> {
  //   return this.http.get<IMovieModel>(api + "/" + id);
  // }

  // create(model: IMovieModel): Observable<any> | null {

  //   console.log("Creating new product...", model);
  //   //return this.http.post<ProductModel>(api, model);
  //   return null;
  // }

  // edit(model: IMovieModel): Observable<any> | null {
  //   console.log(`Editing the ${model.title} product...`);
  //   //return this.http.put<ProductModel>(api, model);
  //   return null;
  // }

  // // TODO: refactor api path
  // delete(id: number): void {
  //   console.log("Deleting product id: " + id);
  //   // TODO: handle bad result
  //   //this.http.delete(api + "/" + id);
  // }
  
}