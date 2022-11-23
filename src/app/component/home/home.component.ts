import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToTaskTwo() {
    this.router.navigate(['/task-2']);
  }

  goToTaskOne() {
    this.router.navigate(['/task-1']);
  }

}
