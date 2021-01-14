import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
import * as _ from 'lodash'

import { MovieDataService } from './../../services/movie-data.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { ImovieComponent } from 'src/app/models';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  currentUser: any;
  movieList: ImovieComponent[];

  constructor(
    private authService: AuthenticationService,
    private titleService: Title,
    private logger: NGXLogger,
    private movieDataService: MovieDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.titleService.setTitle('Wookie Movies - Dashboard');
    this.logger.log('Dashboard loaded');
    this.getAllMovies();
  }

  async getAllMovies() { 
    await this.movieDataService.getAllMovies().subscribe(
      res => {
        const data = res.movies.map(movie => ({
          ...movie,
          genres: movie.genres[0]
        }));
  
        console.log(data)
        const final: any = _.groupBy(data, 'genres');
        
        console.log(final)
        this.movieList = Object.values(final);
        console.log(this.movieList)

      }, err => {
        this.logger.log('Error');
        console.error(err)
      }
    );
  }

  openMovie(slug: string) {
    alert(slug)
    this.router.navigateByUrl(`icons`)
  }
}
