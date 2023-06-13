import { Component, OnInit } from '@angular/core';
import allJobs from '../all_jobs.json';
import moment from 'moment';
// import { DatePipe } from '@angular/common';

import {
  NgbCalendar,
  NgbDatepickerConfig,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  jobs: any[] | undefined;

  formatDate(): string {
    const now = new Date();
    const year = now.getFullYear().toString().padStart(4, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
  }

  selectedDate: NgbDateStruct | undefined;

  constructor(
    private calendar: NgbCalendar,
    private config: NgbDatepickerConfig
  ) {
    // Customize the datepicker configuration
    config.minDate = { year: 1900, month: 1, day: 1 };
    config.maxDate = this.calendar.getToday();
  }
  ngOnInit(): void {
    console.log(allJobs);
    const organizedJobs = this.organizeJobsByProperty(allJobs, 'name');
    console.log(organizedJobs);

    this.jobs = organizedJobs.map((item) => {
      return { ...item };
    });
  }

  organizeJobsByProperty(data: any[], property: string): any[] {
    const organizedData: { [key: string]: any[] } = {};

    for (const item of data) {
      const value = item[property];
      if (!organizedData[value]) {
        organizedData[value] = [];
      }
      organizedData[value].push(item);
    }

    const result: any[] = [];
    for (const key in organizedData) {
      const date = this.formatDate();
      if (organizedData.hasOwnProperty(key)) {
        const data = organizedData[key];
        const modifiedData = data.map((job: any) => {
          const status = job.status;
          let modifiedTime: any = undefined;

          if (status === 'Wait Condition' || status === 'Executing') {
            const startTime = job.estimatedStartTime[0];
            const currentTime = date;
            const start = moment(startTime, 'YYYYMMDDHHmmss');
            const current = moment(currentTime, 'YYYYMMDDHHmmss');

            const duration = moment.duration(current.diff(start));
            const hours = duration.hours();
            const minutes = duration.minutes();
            modifiedTime = `${hours}H ${minutes}M`;
          } else if (status === 'Ended OK' || status === 'Ended Not OK') {
            const endTime = job.endTime;
            const currentTime = date;
            const end = moment(endTime, 'YYYYMMDDHHmmss');
            const current = moment(currentTime, 'YYYYMMDDHHmmss');

            const duration = moment.duration(end.diff(current));
            const hours = duration.hours();
            const minutes = duration.minutes();
            modifiedTime = `${hours}H ${minutes}M`;
          }

          return {
            ...job,
            modifiedTime,
          };
        });

        result.push({
          name: key,
          arrays: modifiedData,
        });
      }
    }

    return result;
  }


}
