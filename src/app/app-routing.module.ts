import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { MorrisComponent } from './charts/morris/morris.component';
import { FlotComponent } from './charts/flot/flot.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'charts',
    children: [
      { path: 'flot/:id', component: FlotComponent },
      { path: 'morris', component: MorrisComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
