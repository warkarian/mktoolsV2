import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-info-contacto',
  templateUrl: './home-info-contacto.component.html',
  styleUrls: ['./home-info-contacto.component.css']
})
export class HomeInfoContactoComponent implements OnInit {
  title = 'mxMarketingTools';
  lat = 22.284044;
  lng = -97.869542;

  constructor() { }

  ngOnInit() {
  }

}
