import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})

export class ModulosComponent {}
/* export class ModulosComponent implements OnInit {
  colorUno: String;
  colorDos: String;
  degradado: {};
  modulos: Modulos[] = [];

  constructor(
    private modulosService: ModulosService,
    public sharedService: SharedService
  ) { }

  ngOnInit() {
    this.obtenerModulos();
  }

  obtenerModulos() {
    this.modulosService.obtenerModulos()
      .subscribe(
        (response: any) => {
          this.modulos = response;
          console.log(response[0].colorTheme);
          this.obtenerColor('#01C7B7', '#03D5A6');
        },
        (error) => {

        }
      );
  }

  obtenerColor(colorUno, colorDos) {
    this.degradado = {colorUno: colorUno, colorDos: colorDos, seccion: 'modulos'};
    this.colorUno = colorUno;
    this.colorDos = colorDos;
    this.sharedService.degradadoSubject.next(this.degradado);
  }
} */
