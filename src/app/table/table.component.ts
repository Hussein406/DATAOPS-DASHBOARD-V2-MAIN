import { Component, OnInit } from '@angular/core';
import allJobs from '../all_jobs.json';
import moment from 'moment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  jobs: any[] | undefined;

  ngOnInit(): void {
    console.log(allJobs);
    this.jobs = allJobs.map((item) => {
      const startTime = item.estimatedStartTime;
      const endTime = item.estimatedEndTime;

      const start = moment(startTime, 'YYYYMMDDHHmmss');
      const end = moment(endTime, 'YYYYMMDDHHmmss');

      const duration = moment.duration(end.diff(start));
      const hours = duration.hours();
      const minutes = duration.minutes();

      const modifiedTime = `${hours}H ${minutes}M`;

      return {
        ...item,
        modifiedTime,
      };
    });
  }
}
