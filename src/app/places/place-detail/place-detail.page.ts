import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placeService: PlacesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      const recipeId = paramMap.get('id');
      this.place = this.placeService.getPlace(recipeId);
      console.log(this.place);
    });
  }

  async deletePlace() {
    const alertElement = await this.alertCtrl.create({
      header: 'Are you sure you want to delete it?',
      message: 'Be careful',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.placeService.deletePlace(this.place.id);
          this.router.navigate(['/places']);
        }
      }
      ]
    });
    await alertElement.present();
  }

}
