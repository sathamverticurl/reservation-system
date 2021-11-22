import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private http: HttpClient) { }
  public getTrains() {
    return this.http.get('/assets/trains.json');
  }
  public bookTicket(dataObj: any) {
    return this.http.post('https://619b74e427827600174455ec.mockapi.io/myBookings', dataObj);
  }
}
