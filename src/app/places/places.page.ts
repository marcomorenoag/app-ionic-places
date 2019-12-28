import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from './places.service';
import { Place } from './place.model';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places: Place[] = [];

  constructor(
    private placeService: PlacesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces();
  }

  ionViewWillEnter() {
    this.places = this.placeService.getPlaces();
  }

  addNewPlace() {
    console.log('Works!');
    this.router.navigate(['/new-place']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
