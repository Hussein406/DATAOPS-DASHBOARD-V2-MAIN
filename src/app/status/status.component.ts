import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent {
  todayDate = new Date();

  cards = [
    {
      title: 'Ended Ok',
      statusNo: '12',
      textType: 'success',
      iconName: 'check-circle-fill',
      loading: false,
    },
    {
      title: 'Ended Not OK',
      statusNo: '2',
      textType: 'danger',
      iconName: 'exclamation-octagon',
      loading: false,
    },
    {
      title: 'Wait Condition',
      statusNo: '1',
      textType: 'warning',
      iconName: 'arrow-clockwise',
      loading: false,
    },
    {
      title: 'Executing',
      statusNo: '20',
      textType: 'primary',
      iconName: 'hourglass-bottom',
      loading: true,
    },
  ];
}
