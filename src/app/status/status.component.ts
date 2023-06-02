import { Component, OnInit } from '@angular/core';
import allJobs from '../all_jobs.json';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit {
  todayDate = new Date();
  waitCondition = 'Wait Condition';
  executing = 'Executing';
  endedOk = 'Ended OK';
  endedNotOk = 'Ended Not OK';

  countStatusOccurrences(data: any[], status: string): number {
    return data.reduce((count, item) => {
      if (item.status === status) {
        return count + 1;
      }
      return count;
    }, 0);
  }

  waitCount = this.countStatusOccurrences(allJobs, this.waitCondition);
  executeCount = this.countStatusOccurrences(allJobs, this.executing);
  endedOkCount = this.countStatusOccurrences(allJobs, this.endedOk);
  endedNoOkCount = this.countStatusOccurrences(allJobs, this.endedOk);

  ngOnInit(): void {}

  cards = [
    {
      title: 'Ended Ok',
      statusNo: this.endedOkCount,
      textType: 'success',
      iconName: 'check-circle-fill',
      loading: false,
    },
    {
      title: 'Ended Not OK',
      statusNo: this.endedNoOkCount,
      textType: 'danger',
      iconName: 'exclamation-octagon',
      loading: false,
    },
    {
      title: 'Wait Condition',
      statusNo: this.waitCount,
      textType: 'warning',
      iconName: 'arrow-clockwise',
      loading: false,
    },
    {
      title: 'Executing',
      statusNo: this.executeCount,
      textType: 'primary',
      iconName: 'hourglass-bottom',
      loading: true,
    },
  ];
}
