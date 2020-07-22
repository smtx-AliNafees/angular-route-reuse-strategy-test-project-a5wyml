import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      PARENT COMPONENT
      <input>
      <br>
      <router-outlet></router-outlet>
    </div>
  `
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}