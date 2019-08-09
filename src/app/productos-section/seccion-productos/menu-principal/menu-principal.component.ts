import { Component, OnInit } from '@angular/core';
/* import { MenuProductosService } from '../../../../services/menu-productos.service';
import { MenuProducto } from '../../../../models/menuProducto';
import { SharedService } from '../../../../services/shared.service'; */

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})

export class MenuPrincipalComponent {

}

/* export class MenuPrincipalComponent implements OnInit {
  listadoProductos: MenuProducto[] = [];

  constructor(private menuProductosService: MenuProductosService,
              public sharedService: SharedService) { }

  ngOnInit() {
    this.obtenerMenuPrincipal();
    this.sharedService.degradadoSubject.next({colorUno: '#000000', colorDos: '#000000', seccion: 'displays'});
  }

  obtenerMenuPrincipal() {
    this.menuProductosService.obtenerMenuPrincipal()
      .subscribe(
        (menuPrincipal) => {
          this.listadoProductos = menuPrincipal;
        },
        (error) => {
          console.log(error);
        }
      );
  }
} */
