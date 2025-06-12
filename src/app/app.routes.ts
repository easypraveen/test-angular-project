import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { userSelectedGuard } from './guards/user-selected.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path : 'users', component : UserListComponent},
    {path : 'user/:id', loadComponent: () => import('./pages/user/user-detail/user-detail.component')
        .then(m => m.UserDetailComponent) , canActivate : [userSelectedGuard]},
    {path: '**', redirectTo: ''}
];
