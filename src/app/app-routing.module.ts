import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'template',
    pathMatch: 'full'
  },
  {
    path:'template',
    loadChildren: () => import('./template/template.module').then ( m => m.TemplateModule )
  },
  {
    path:'reactive',
    loadChildren: () => import('./reactive/reactive.module').then ( m => m.ReactiveModule )
  },
  {
    path:'**',
    redirectTo: 'template'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
