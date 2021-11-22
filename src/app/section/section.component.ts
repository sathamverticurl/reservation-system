import { Component, OnInit, Input, VERSION } from '@angular/core';
import {StationsService} from './../stations.service';
import {BookingService} from './../booking.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  public stationLists: any;
  public travelDate: any;
  public showLoader: boolean = false;
  public results: any = [];
  public coachSelection: boolean = false;
  public selectedIndex: number | undefined;
  public showBookingForm: boolean = false;
  @Input() item = '';
  constructor(
    private stations: StationsService,
    private formBuilder: FormBuilder,
    private booking: BookingService
  ) {}
  public checkoutForm = this.formBuilder.group({
    fromStn: ['', [
      Validators.required
    ]],
    toStn: ['', [
      Validators.required
    ]],
    travelDate: ['', [
      Validators.required
    ]]
  });
  ngOnInit(): void {
    this.getStationLists();
  }
  public getStationLists() {
    this.stations.getStations().subscribe((val: any) => {
      this.stationLists = val;
    })
  }
  public onSubmit() {
    this.showLoader = true;
    this.booking.getTrains().subscribe((val: any) => {
      this.results = val;
      this.showLoader = false;
    });
  }
  public selectCoach(value: any, result: any) {
    result['selectedCoach'] = value;
    this.coachSelection = false;
  }
  public bookTicket(data: any, index: number) {
    this.selectedIndex = index;
    if(data?.selectedCoach) {
      this.showBookingForm = true;
    } else {
      this.coachSelection = true;
    }
  }
  public closePopUp(emitData: any) {
    this.selectedIndex = undefined;
    this.showBookingForm = false;
    this.results[emitData].selectedCoach = '';
  }
}
