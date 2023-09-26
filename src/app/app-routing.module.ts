import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { LoginComponent, RegisterComponent } from './account';
import { AuthGuard } from './_helpers';

const routes: Routes = [
{ path: '', component: HomeComponent },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'starships', component: StarshipsListComponent, canActivate: [AuthGuard]},
  { path: 'starships/:id', component: StarshipDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
