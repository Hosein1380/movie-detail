import { Routes } from '@angular/router';

export const appRoutes: Routes = [

  {
    path: '',
    loadChildren: () => import("./login/login.module").then((module) => module.LoginModule),
  },
  {
    path: 'movies',
    loadChildren: () => import("./movies/movies.module").then((module) => module.MoviesModule),
  },

]

