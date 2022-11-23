import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent implements OnInit {

  shortcutUrlFirst: string = '';
  shortcutUrlSecond: string = '';

  constructor(private service: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  shortUrl(url: string) {
    this.service.getShortUrl(url)
      .pipe(
        catchError(() => {
          return throwError(() => new Error('Enter something wrong !'))
        })
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          if (res) {
            this.shortcutUrlFirst = res.result.short_link;
            this.shortcutUrlSecond = res.result.short_link2;
          }
        },
        error: (err) => {
          console.log(err);
          alert("Enter a valid url i.e, xyz.com")
        },
      })
  }
}
