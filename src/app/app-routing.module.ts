import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  { path: 'mybookings', component: MyBookingsComponent },
  { path: 'search', component: SectionComponent },
  { path: '**', component: SectionComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes, 
      {
        enableTracing: true
      }
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
