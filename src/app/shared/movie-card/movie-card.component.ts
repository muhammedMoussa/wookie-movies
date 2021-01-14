import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Imovie } from './../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})

export class MovieCardComponent {
  @Input() movie: Imovie;
  @Output() openMovie = new EventEmitter<string>();
}
