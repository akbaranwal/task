import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getShortUrl(url: string): Observable<any> {
    return this.http.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
  }

}
