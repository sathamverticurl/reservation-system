import { Component, OnInit } from '@angular/core';
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
    console.log(this.results);
    this.getStationLists();
  }

  public getStationLists() {
    this.stations.getStations().subscribe((val: any) => {
      this.stationLists = val;
    })
  }

  public onSubmit() {
    console.log(this.checkoutForm);
    this.showLoader = true;
    this.booking.getTrains().subscribe((val: any) => {
      this.results = val;
      this.showLoader = false;
    })
  }
  public selectCoach(value: any, result: any) {
    result['selectedCoach'] = value;
  }
}
