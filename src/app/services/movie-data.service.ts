import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash'

import { Imovie, Imovies } from '../models';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MovieDataService {
  private MovieList$ = new BehaviorSubject<Imovie[]>([]);
  private CurrentMovie$ = new BehaviorSubject<Imovie>(null);

  getAllMovies(): Observable<Imovies> {
    return this.http.get<Imovies>(`${environment.apiUrl}/movies`);
  }

  public getMovieList(): Observable<Imovie[]> {
    return this.MovieList$.asObservable();
  }

  public setMovieList(data: Imovie[]): void {
    return this.MovieList$.next(data);
  }

  setCurrrentMovie(movie: Imovie): void {
    return this.CurrentMovie$.next(movie);
  }

  getCurrrentMovie(): Observable<Imovie> {
    return this.CurrentMovie$.asObservable();
  }

  constructor(private http: HttpClient) { }
}
