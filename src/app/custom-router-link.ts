// credit for the idea goes to dmitrimaltsev. see https://github.com/angular/angular/issues/13869
// "The only downside is that when you navigate to deeply nested routes like this /foo/fooChild -> /bar/barChild, the router still fails, but I solved this with a custom version of routerLink which in this case would first navigate to /bar and then to /bar/barChild, which works fine."

import { Directive, ElementRef, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'

@Directive({
  selector: '[customRouterLink]'
})
export class CustomRouterLink implements OnInit {

  @Input() customRouterLink: string = '';
  private pathParts: string[];

  constructor(
    private elementRef: ElementRef,
    private router: Router) {}

  ngOnInit() {
    this.pathParts = this.customRouterLink.split("/");
    this.elementRef.nativeElement.addEventListener('click', this.activate.bind(this));
  }

  activate() {
    if (this.pathParts.length) {
      let p = this.pathParts[0];
      // console.log("navigating to " + p);
      let promise: Promise<any> = this.router.navigateByUrl(p);

      for (let i = 1; i < this.pathParts.length; i++) {
        p = p + "/" + this.pathParts[i];
        promise = promise.then(() => {
          // console.log("navigating to " + p);
          this.router.navigateByUrl(p);
        });
      }        
    }
  }
}