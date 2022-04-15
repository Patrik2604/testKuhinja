import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GornjiElementComponent } from './gornji-element/gornji-element.component';
import { DonjiElementComponent } from './donji-element/donji-element.component';

const routes: Routes = [
  { path: "gornjiElement", component: GornjiElementComponent},
  { path: "donjiElement", component: DonjiElementComponent},
  { path: '', redirectTo: '/gornjiElement', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
