import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesAPIService } from 'src/app/movies-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any = {};

  constructor(
    private route: ActivatedRoute,
    private movieAPIService: MoviesAPIService
  ) {}

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails() {
    this.movieAPIService
      .getMovieDetails(this.route.snapshot.params['id'])
      .subscribe((response) => {
        this.movie = response;
      });
  }

  getRuntime() {
    return `${Math.floor(this.movie.runtime / 60)}h ${this.movie.runtime % 60}m`;
  }
}
/**
 * 3/4 left for text 1/4 right for image
 * title
 * release_date runtime
 * ngif original title
 * tagline
 * overview
 * genres
 * original_language
 * production_country.name
 */
