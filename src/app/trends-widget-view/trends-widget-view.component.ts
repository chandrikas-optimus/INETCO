import { Component, OnInit } from '@angular/core';
import 'd3';
import 'nvd3';
import { nvD3 } from 'ng2-nvd3';
declare let d3: any;
declare var nv;
let dynamicLineWithFocusChart;
let lineWithFocusChart;

let margin = {top: 20, right: 20, bottom: 30, left: 35};
let width = 660 - margin.left - margin.right;
let height = 400 - margin.top - margin.bottom;

@Component({
  moduleId: module.id,
  selector: 'app-trends-widget-view',
  templateUrl: 'trends-widget-view.component.html',
  styleUrls: ['trends-widget-view.component.css'],
  directives: [ nvD3 ]
})

export class TrendsWidgetViewComponent implements OnInit {
  options;
  options1;
  data;
  run: boolean = true;
  ngOnInit() {
      this.drawChart();
  }
  // function to draw chart
  drawChart() {
      nv.addGraph(() => {
        let chart = nv.models.lineWithFocusChart();
        chart.brushExtent([new Date(2012, 0, 2), new Date(2012, 0, 6)]);
        chart.xAxis.tickFormat(function(d) { return d3.time.format('%b %d, %H:%M')(new Date(d)); });
        chart.x2Axis.tickFormat(function(d) { return d3.time.format('%b %d, %H:%M')(new Date(d)); });
        chart.yAxis.tickFormat(function(d) {  return d3.format(',.2f')(d); });
        chart.y2Axis.tickFormat(function(d) {  return d3.format(',.2f')(d); });
        chart.useInteractiveGuideline(true);
        dynamicLineWithFocusChart = d3.select('svg').datum(this.generateData());
        d3.select('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .datum(this.generateData())
            .call(chart);
        nv.utils.windowResize(chart.update);
        lineWithFocusChart = chart;
        return chart;
    });
  }
// function to generate random data  
generateData() {
    return [{
        'key': 'Metric 1',
        'values': [{
                'x': new Date(2012, 0, 1),
                'y': 3
            }, {
                'x': new Date(2012, 0, 1),
                'y': 4
            }, {
                'x': new Date(2012, 0, 2),
                'y': 3
            }, {
                'x': new Date(2012, 0, 2),
                'y': 4
            }, {
                'x': new Date(2012, 0, 3),
                'y': 3.5
            }, {
                'x': new Date(2012, 0, 3),
                'y': 4.5
            }, {
                'x': new Date(2012, 0, 4),
                'y': 2.5
            }, {
                'x': new Date(2012, 0, 4),
                'y': 6
            }, {
                'x': new Date(2012, 0, 5),
                'y': 5
            }, {
                'x': new Date(2012, 0, 5),
                'y': 3
            }, {
                'x': new Date(2012, 0, 6),
                'y': 2.5
            }, {
                'x': new Date(2012, 0, 7),
                'y': 3
            }, {
                'x': new Date(2012, 0, 7),
                'y': 4
            }, {
                'x': new Date(2012, 0, 8),
                'y': 2
            }, {
                'x': new Date(2012, 0, 8),
                'y': 3
            }, {
                'x': new Date(2012, 0, 9),
                'y': 4
            }, {
                'x': new Date(2012, 0, 9),
                'y': 2
            }]
        },
        {
            'key': 'Metric 2',
            'values': [{
                'x': new Date(2012, 0, 1),
                'y': 4
            }, {
                'x2': new Date(2012, 0, 2),
                'y': 6
            }, {
                'x2': new Date(2012, 0, 2),
                'y': 3
            }, {
                'x': new Date(2012, 0, 3),
                'y': 5
            }, {
                'x': new Date(2012, 0, 3),
                'y': 4.5
            }, {
                'x': new Date(2012, 0, 4),
                'y': 3
            },  {
                'x': new Date(2012, 0, 4),
                'y': 2.5
            }, {
                'x': new Date(2012, 0, 5),
                'y': 5
            }, {
                'x': new Date(2012, 0, 6),
                'y': 2
            }, {
                'x': new Date(2012, 0, 7),
                'y': 7
            }, {
                'x': new Date(2012, 0, 8),
                'y': 1
            },  {
                'x': new Date(2012, 0, 9),
                'y': 3
            }]
        }];
    }
// function to update chart on navigation change
reDrawChart(num: any) {
    num = num === 2 ? [new Date(2012, 0, 2), new Date(2012, 0, 4)] : [new Date(2012, 0, 3), new Date(2012, 0, 5)];
    lineWithFocusChart.brushExtent(num);
    dynamicLineWithFocusChart.transition().duration(10).call(lineWithFocusChart);
    dynamicLineWithFocusChart.update;
    }
// function to zoom in chart
zoomIn() {
    document.getElementsByClassName('next-move')[0].classList.remove('selected');
    document.getElementsByClassName('pre-move')[0].classList.add('selected');
    // trigger click event
    document.getElementsByClassName('pre-move')[0].dispatchEvent(new Event('click'));
    }
// function to zoom in chart
zoomOut() {
    document.getElementsByClassName('pre-move')[0].classList.remove('selected');
    document.getElementsByClassName('next-move')[0].classList.add('selected');
    // trigger click event
    document.getElementsByClassName('next-move')[0].dispatchEvent(new Event('click'));
    }
};
