import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuardService} from './auth-guard.service';

import {MovieDetailsComponent} from './movies/movie-details/movie-details.component';
import {MoviesComponent} from './movies/movies.component';

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {
    path: 'movies',
    // canActivate: [AuthGuardService],
    children: [
      {path: '', component: MoviesComponent},
      {path: ':id', component: MovieDetailsComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
