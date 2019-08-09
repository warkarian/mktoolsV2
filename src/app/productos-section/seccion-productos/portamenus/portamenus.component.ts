import { Component, OnInit } from '@angular/core';
/* import { Modulos } from '../../../../models/modulos';
import { PortamenusService } from '../../../../services/portamenus.service';
import { SharedService } from '../../../../services/shared.service';
import { Portamenu } from '../../../../models/portamenu'; */

@Component({
  selector: 'app-portamenus',
  templateUrl: './portamenus.component.html',
  styleUrls: ['./portamenus.component.css']
})

export class PortamenusComponent {

}
/* export class PortamenusComponent implements OnInit {
  colorUno: String;
  colorDos: String;
  degradado: {};
  portamenus: Portamenu[] = [];

  constructor(private portamenusService: PortamenusService,
              public sharedService: SharedService) { }

  ngOnInit() {
    this.obtenerPortamenus();
  }

  obtenerPortamenus() {
    this.portamenusService.obtenerPortamenus()
      .subscribe(
        (response) => {
          this.portamenus = response;
          this.obtenerColor('#7D2ED9', '#7C2AD6');
        },
        (error) => {
          console.log(error);
        });
  }

  obtenerColor(colorUno, colorDos) {
    this.degradado = {colorUno: colorUno, colorDos: colorDos, seccion: 'portamenus'};
    this.colorUno = colorUno;
    this.colorDos = colorDos;
    this.sharedService.degradadoSubject.next(this.degradado);
  }

} */
