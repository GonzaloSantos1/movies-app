import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesAPIService } from '../movies-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  page = 1;
  movieList: any[] = [];
  totalResults: number = 0;

  constructor(
    private moviesAPIService: MoviesAPIService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.moviesAPIService.getMovies(this.page).subscribe((response) => {
      this.movieList = response.results;
      this.totalResults = response.total_results;
    });
  }

  navigateToDetails(movieID: number) {
    this.router.navigate(['/movies/' + movieID]);
  }
}
