import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
/* import { SharedService } from '../../../services/shared.service';
import { DisplayService } from '../../../services/display.service';
import { Categoria } from '../../../models/categoria';
import { reduce } from 'rxjs/operator/reduce'; */


@Component({
  selector: 'app-seccion-productos',
  templateUrl: './seccion-productos.component.html',
  styleUrls: ['./seccion-productos.component.css']
})

export class SeccionProductosComponent {
  hide = true;
  /* @ViewChild('botonNav') botonNav: ElementRef; */
}
/* export class SeccionProductosComponent implements OnInit, AfterContentInit {
  hide = true;
  categorias: Categoria[] = [];
  degradado: any;
  color1: string;
  color2: string;
  @ViewChild('botonNav') botonNav: ElementRef;

  constructor(public sharedService: SharedService,
              private displayService: DisplayService) {
  }

  ngOnInit() {
    this.color1 = 'red';
    this.color2 = 'blue';
  }

  ngAfterContentInit() {

    this.degradado = {colorUno: '', colorDos: '', seccion: ''};
    this.obtenerCategoriasNav();
    this.sharedService.degradadoSubject
      .subscribe(
        (data: any) => {
          console.log(data['colorUno']);
          this.degradado.colorUno = data['colorUno'];
          this.degradado.colorDos = data['colorDos'];
          this.degradado.seccion = data['seccion'];
          setTimeout(() => {
            this.botonNav.nativeElement.style.background = 'black';
            this.botonNav.nativeElement.style.background =
              'linear-gradient(to right, ' + this.degradado.colorUno + ', ' + this.degradado.colorDos;
            this.botonNav.nativeElement.style.color = 'white';
          });


          if (this.degradado.seccion !== 'displays') {
            this.hide = false;
            setTimeout(() => {
              this.botonNav.nativeElement.style.background = '#f0f0f0';
              this.botonNav.nativeElement.style.color = 'black';
            });
          } else {
            setTimeout(() => {
              this.hide = true;
            });
          }
          console.log(this.degradado, 'seccion principal');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  obtenerCategoriasNav() {
    this.displayService.obtenerCategoriasParaNavegacion()
      .subscribe(
        (categorias) => {
          this.categorias = categorias;
        },
        (error) => {
          console.log(error);
        }
      );
  }
} */
