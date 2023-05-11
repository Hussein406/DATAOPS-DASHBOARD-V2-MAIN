import { Component } from '@angular/core';

@Component({
  selector: 'app-data-manager',
  templateUrl: './data-manager.component.html',
  styleUrls: ['./data-manager.component.css'],
})
export class DataManagerComponent {
  jobs = [
    { title: 'Job 1', company: 'Company 1' },
    { title: 'Job 2', company: 'Company 2' },
    { title: 'Job 3', company: 'Company 3' },
  ];
  searchText = '';
  onFilter() {
    // filter the jobs array based on the search text
    this.jobs = this.jobs.filter(
      (job) =>
        job.title.includes(this.searchText) ||
        job.company.includes(this.searchText)
    );
  }
}
