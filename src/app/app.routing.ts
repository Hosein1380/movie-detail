import { Routes } from '@angular/router';

export const appRoutes: Routes = [

  {
    path: '',
    loadChildren: () => import("./login/login.module").then((module) => module.LoginModule),
  },

]

