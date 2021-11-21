import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StationsService {
  constructor(private http: HttpClient) { }
  getStations(): any {
    return this.http.get('/assets/stations.json')
  }
}
