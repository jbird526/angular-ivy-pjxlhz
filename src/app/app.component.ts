import { Component, VERSION } from '@angular/core';
import { IGanttChartEvent } from './gantt-chart/_models/gantt-chart-event.model';
import { IGanttCharRow } from './gantt-chart/_models/gantt-chart-row.model';
import { IGanttChartMileStone } from './gantt-chart/_models/gantt-chart-milestone.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gantt-chart';
  rows: IGanttCharRow[];
  constructor() {
    this.rows = [
      {
        name: 'Assignments',
        events: [
          {
            name: '',
            startDate: new Date('2021-01-01'),
            endDate: new Date('2021-01-31'),
            color: 'red',
          } as IGanttChartEvent,
          {
            name: '',
            startDate: new Date('2021-02-03'),
            endDate: new Date('2021-02-17'),
            color: 'red',
          } as IGanttChartEvent,
          {
            name: '',
            startDate: new Date('2021-03-01'),
            endDate: new Date('2021-03-31'),
            color: 'green',
          } as IGanttChartEvent,
          {
            name: '',
            startDate: new Date('2021-04-05'),
            endDate: new Date('2021-06-19'),
            color: 'blue',
          } as IGanttChartEvent,
        ],
        mileStones: [
          { name: '', date: new Date('2021-04-15') } as IGanttChartMileStone,
          { name: '', date: new Date('2021-01-15') } as IGanttChartMileStone,
        ],
      } as IGanttCharRow,

      {
        name: 'IFSM 301 Final Project Revision',
        events: [
          {
            name: '',
            startDate: new Date('2021-02-15'),
            endDate: new Date('2021-02-28'),
          } as IGanttChartEvent,
          {
            name: '',
            startDate: new Date('2021-04-01'),
            endDate: new Date('2021-08-31'),
            color: 'red',
          } as IGanttChartEvent,
        ],
        mileStones: [
          {
            name: 'Funding round complete',
            date: new Date('2021-01-28'),
          } as IGanttChartMileStone,
        ],
      } as IGanttCharRow,
      {
        name: 'Final Updated Course Materials',
        events: [
          {
            name: '',
            startDate: new Date('2021-03-02'),
            endDate: new Date('2021-03-15'),
          } as IGanttChartEvent,
          {
            name: '',
            startDate: new Date('2021-04-05'),
            endDate: new Date('2021-09-19'),
            color: 'blue',
          } as IGanttChartEvent,
        ],
      } as IGanttCharRow,
      {
        name: 'Research Project',
        events: [
          {
            name: '',
            startDate: new Date('2021-03-15'),
            endDate: new Date('2021-03-30'),
          } as IGanttChartEvent,
        ],
      } as IGanttCharRow,
      {
        name: 'Assignment Name',
        events: [
          {
            name: 'IFSM 301 Final Project Revision',
            startDate: new Date('2021-02-15'),
            endDate: new Date('2021-04-30'),
          } as IGanttChartEvent,
          {
            name: '',
            startDate: new Date('2021-09-01'),
            endDate: new Date('2021-012-31'),
            color: 'green',
          } as IGanttChartEvent,
        ],
      } as IGanttCharRow,
    ];
  }
}
