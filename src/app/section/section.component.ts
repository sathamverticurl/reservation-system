import { Component, OnInit } from '@angular/core';
import {StationsService} from './../stations.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  public stationLists: any;
  public travelDate: any;
  public showLoader: boolean = false;
  constructor(
    private stations: StationsService,
    private formBuilder: FormBuilder
  ) {}
  public checkoutForm = this.formBuilder.group({
    fromStn: '',
    toStn: '',
    travelDate: ''
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
    console.log('Submitted');
    console.log(this.checkoutForm.value);
    this.showLoader = true;
  }

}
