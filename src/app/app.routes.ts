import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'),
}, {
    path: 'trending',
    loadComponent: () => import('./gifs/pages/trending-page/trending-page'),
}, {
    path: '**',
    redirectTo: 'dashboard',
}];
