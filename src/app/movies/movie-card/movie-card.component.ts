import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { IMovieModel } from '../../services/movies';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input()
  movie_card_model: IMovieModel = {
    adult: false,
    backdrop_path: "",
    id: 0,
    title: "",
    original_language: "",
    original_title: "",
    overview: "",
    poster_path: "",
    media_type: "",
    genre_ids: [],
    popularity: 0,
    release_date: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  }
}
