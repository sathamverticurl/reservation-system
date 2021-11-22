import { Component, OnInit } from '@angular/core';
import { BookingService } from './../booking.service';
@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  public bookedData: any = [];
  constructor(private booking: BookingService ) { }

  ngOnInit(): void {
    this.myBookings();
  }

  /**
   * To get the booked tickets
   * @memberof MyBookingsComponent
   */
  private myBookings() {
    this.booking.myBookings().subscribe((val: any) => {
      this.bookedData = val;
      console.log(this.bookedData);
    });
  }

}
