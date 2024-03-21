import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WheatherHomeComponent } from './modules/wheater/page/weather-home/weather-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
  {
    path:'weather',
    component: WheatherHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
