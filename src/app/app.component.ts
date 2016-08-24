import { Component } from '@angular/core';

import { LayoutComponent } from './layout';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ LayoutComponent ]
})

export class AppComponent {
  title: string;
};
