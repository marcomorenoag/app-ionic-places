import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'places',
    children: [
      {
        path: '',
        loadChildren: () => import('./places/places.module').then(m => m.PlacesPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./places/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
      }
    ]
  },
  {
    path: 'new-place',
    loadChildren: () => import('./places/place-add/place-add.module').then(m => m.PlaceAddPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
