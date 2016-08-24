import { Component, Input } from '@angular/core';
import { IPane } from './Ipane';
import { TrendsWidgetViewComponent } from '../../trends-widget-view';

@Component({
  moduleId: module.id,
  selector: 'app-pane',
  templateUrl: 'pane.component.html',
  styleUrls: ['pane.component.css'],
  directives: [ TrendsWidgetViewComponent ]
})
export class PaneComponent implements IPane {
  @Input() paneTitle: string;
  @Input() paneHeight: number;
  @Input() paneButton;
}
