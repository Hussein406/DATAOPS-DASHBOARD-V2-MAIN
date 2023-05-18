import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  items = [
    { column1: 'PINCARG0_S4A_CSV_DELETION_AZ' },
    { column1: 'PINCARG0_S4A_CSV_DELETION_AZ' },
    { column1: 'PINCARG0_S4A_CSV_DELETION_AZ' },
    { column1: 'PINCARG0_S4A_CSV_DELETION_AZ' },
  ];

  ngOnInit(): void {
    console.log(this.items);
  }
}
