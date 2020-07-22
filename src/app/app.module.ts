import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { MaltsevRouteReuseStrategy } from './maltsev-reuse'

import { CustomRouterLink } from './custom-router-link'

import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { SiblingComponent } from './sibling.component';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';
import { Child3Component } from './child3.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, ParentComponent, Child1Component, Child2Component, Child3Component, SiblingComponent, CustomRouterLink ],
  bootstrap:    [ AppComponent ],
  providers: [
    {
      provide: RouteReuseStrategy,
      // useClass: CustomRouteReuseStrategy
      useClass: MaltsevRouteReuseStrategy
    }
  ]
})
export class AppModule { }
