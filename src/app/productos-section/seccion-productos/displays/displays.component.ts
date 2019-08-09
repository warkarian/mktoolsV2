import { Component, OnInit } from '@angular/core';
/* import { Categoria } from '../../../../models/categoria';
import { DisplayService } from '../../../../services/display.service';
import { SharedService } from '../../../../services/shared.service'; */

@Component({
  selector: 'app-displays',
  templateUrl: './displays.component.html',
  styleUrls: ['./displays.component.css']
})

export class DisplaysComponent {}
/* export class DisplaysComponent implements OnInit {
  colorUno: String;
  colorDos: String;
  categorias: Categoria[] = [];

  constructor(
    private displayService: DisplayService,
    public sharedService: SharedService
              ) { }

  ngOnInit() {
    this.obtenerCategorias();
    console.log('categorias comp');
  }

  obtenerCategorias() {
    this.displayService.obtenerCategorias()
      .subscribe(
        (categorias) => {
          this.categorias = categorias;
          console.log(categorias[0].colorTheme);
          this.sharedService.degradadoSubject.next({colorUno: '#000000', colorDos: '#000000', seccion: 'displays'});
          // this.obtenerColor(categorias[0].colorTheme.degradado[0].colorUno, categorias[0].colorTheme.degradado[0].colorDos);

        },
        (error) => {
          console.log(error);
        }
      );
  } */

  // obtenerColor(colorUno, colorDos) {
  //   const degradado = 'linear-gradient(to right, ' + colorUno + ', ' + colorDos + ' );';
  //   console.log(degradado);
  //   this.colorUno = colorUno;
  //   this.colorDos = colorDos;
  // }


