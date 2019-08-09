import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component ({
  selector: 'app-carousel-basic',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})

export class NgbdCarouselComponent {
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    /* config.pauseOnHover = false; */
  }
}
