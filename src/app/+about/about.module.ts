import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [AboutComponent],
})
export class AboutModule { }
