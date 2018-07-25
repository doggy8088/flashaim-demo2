import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  goToMorris(id: string) {
    this.router.navigateByUrl('/charts/morris?id=' + id);
  }
  goToMorris2(id: string) {
    this.router.navigate(['charts', 'morris'], {
      queryParams: {
        'id': id
      }
    });
  }
}
