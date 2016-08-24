import { Component, Input, OnInit } from '@angular/core';
import { PaneComponent } from '../shared/pane';
import { TrendsWidgetViewComponent } from './../trends-widget-view';
import { LayoutOptionsClass } from './classes';

@Component({
  moduleId: module.id,
  selector: 'app-i-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.css'],
  directives: [ PaneComponent, TrendsWidgetViewComponent ]
})
export class LayoutComponent implements OnInit {
  layoutOptions = new LayoutOptionsClass();
  @Input() title: string;
  ngOnInit() {
    this.layoutOptions.addOptions(0, 'page title');
    this.layoutOptions.addOptions(1, 'Delete');
    this.layoutOptions.addOptions(2, 'paste');
  }
};
