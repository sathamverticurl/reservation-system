import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {BookingService} from './../booking.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  @Input() item: any;
  @Input() currentData: any;
  @Output() clsPopUp = new EventEmitter<number>();
  @ViewChild('bookBtn') bookingBtn: any;
  public bookingInp: boolean = false;
  public bookingForm = this.formBuilder.group({
    age: ['', [Validators.required]],
    name: ['', [Validators.required]],
    seats: ['', [Validators.required]]
  });
  constructor(
    public formBuilder: FormBuilder,
    public booking: BookingService
  ) { }

  ngOnInit(): void {}

  public closePopUp() {
    this.clsPopUp.emit(this.item);
  }

  public bookTicket() {
    this.bookingInp = true;
    this.bookingBtn.nativeElement.classList.remove('active');
    let copyObj = Object.assign({}, this.currentData, this.bookingForm.value);
    this.booking.bookTicket(copyObj).subscribe((val: any) => {
      let storageVal: any = sessionStorage.getItem("bookedDatas");
      if(storageVal) {
        storageVal = JSON.parse(storageVal);
        storageVal.push(copyObj);
      } else {
        storageVal = [copyObj];
      }
      sessionStorage.setItem("bookedDatas", JSON.stringify(storageVal));
      this.closePopUp();
    });
  }

}
