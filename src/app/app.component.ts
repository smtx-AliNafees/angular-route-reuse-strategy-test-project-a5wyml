import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular RouteReuseStrategy Test Project</h1>

    <div><a customRouterLink="parent">Parent</a></div>
    <div><a customRouterLink="parent/child1">Child 1</a></div>
    <div><a customRouterLink="parent/child2">Child 2</a></div>
    <div><a customRouterLink="parent/child3">Child 3</a></div>
    <br>
    <div><a customRouterLink="sibling">Sibling</a></div>
    <br>

    <router-outlet></router-outlet>
  `,
  styles: [`
    a[customRouterLink] {
      cursor: pointer;
      color: green;
      text-decoration: underline;
    }
  `]
})
export class AppComponent  {}
