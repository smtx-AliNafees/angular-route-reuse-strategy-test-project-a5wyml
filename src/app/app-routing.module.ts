import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentComponent } from './parent.component';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';
import { Child3Component } from './child3.component';
import { SiblingComponent } from './sibling.component';

export const appRoutes: Routes = [
  {
    path: 'parent',
    data: {reuse: true},
    component: ParentComponent,
    children: [
      {
        path: 'child1',
        data: {reuse: true},
        component: Child1Component
      },
      {
        path: 'child2',
        data: {reuse: true},
        component: Child2Component
      },
      {
        path: 'child3',
        data: {reuse: true},
        component: Child3Component
      },
      {
        path: '',
        redirectTo: 'child1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'sibling',
    data: {reuse: true},
    component: SiblingComponent
  },
  {
    path: '',
    redirectTo: 'parent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, {
    // useHash: true,
    // enableTracing: true
  })],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }