import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
  async,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { MoviesComponent } from './movies.component';
import { MoviesAPIService } from '../movies-api.service';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(() => {
    fakeMoviesAPIService = jasmine.createSpyObj('MoviesAPIService', [
      'getMovies',
    ]);
  });

  beforeEach(() => {
    fakeMoviesAPIService = jasmine.createSpyObj('MoviesAPIService', [
      'getMovies',
    ]);

    fakeMoviesAPIService.getMovies.and.returnValue(
      of({
        page: 1,
        results: [
          {
            adult: false,
            backdrop_path: '/wPU78OPN4BYEgWYdXyg0phMee64.jpg',
            genre_ids: [18, 80],
            id: 278,
            original_language: 'en',
            original_title: 'The Shawshank Redemption',
            overview: '',
            popularity: 70.845,
            poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
            release_date: '1994-09-23',
            title: 'The Shawshank Redemption',
            video: false,
            vote_average: 8.7,
            vote_count: 21166,
          },
          {
            adult: false,
            backdrop_path: '/wPU78OPN4BYEgWYdXyg0phMee64.jpg',
            genre_ids: [18, 80],
            id: 278,
            original_language: 'en',
            original_title: 'The Shawshank Redemption',
            overview: '',
            popularity: 70.845,
            poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
            release_date: '1994-09-23',
            title: 'The Shawshank Redemption',
            video: false,
            vote_average: 8.7,
            vote_count: 21166,
          },
        ],
        total_pages: 493,
        total_results: 9848,
      })
    );
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: MoviesAPIService, usevalue: fakeMoviesAPIService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  let fakeMoviesAPIService: jasmine.SpyObj<MoviesAPIService>;

  it('should render movielist', waitForAsync(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.debugElement.componentInstance;
    let movieAPIService = fixture.debugElement.injector.get(MoviesAPIService);
    
    component.getMovies();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.movieList).toBeTruthy();
      expect(component.movieList.length).toBe(2);
      expect(fixture.debugElement.queryAll(By.css('app-movies')).length).toBe(
        2
      );

      console.log(component.movieList);
    });
  }));
});
