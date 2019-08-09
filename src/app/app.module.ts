import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { HomeEmpresaComponent } from './home/home-empresa/home-empresa.component';
import { HomeComponent } from './home/home.component';
import { NgbdCarouselComponent } from './home/home-header/carousel.component';
import { HomeInfoContactoComponent } from './home/home-info-contacto/home-info-contacto.component';
import { NavImagesSectionComponent } from './home/nav-images-section/nav-images-section.component';
import { HomeNuestrosClientesComponent } from './home/home-nuestros-clientes/home-nuestros-clientes.component';
import { SeccionProductosComponent } from './productos-section/seccion-productos/seccion-productos.component';
import { MenuPrincipalComponent } from './productos-section/seccion-productos/menu-principal/menu-principal.component';
import { PmenusComponent } from './productos-section/seccion-productos/portamenus/pmenus.component';
import { PortamenusComponent } from './productos-section/seccion-productos/portamenus/portamenus.component';
import { BasicoComponent } from './productos-section/seccion-productos/portamenus/detalles-portamenus/pmbasico.component';
import { PersonalizadosComponent } from './productos-section/seccion-productos/portamenus/detalles-portamenus/personalizados.component';
import { ExhibidoresLComponent } from './productos-section/seccion-productos/portamenus/detalles-portamenus/exhibidoresl.component';
import { ExhibidoresMComponent } from './productos-section/seccion-productos/portamenus/detalles-portamenus/exhibidoresm.component';
import { ModulosComponent } from './productos-section/seccion-productos/modulos/modulos.component';
import { MicrocounterComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/microcounter.component';
import { MinisimplecounterComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/minisimplecounter.component';
import { QuickcounterComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/quickcounter.component';
import { QuickdeskrComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/quickdesk.component';
import { QuickshowcaseComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/quickshowcase.component';
import { QuickworkstationComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/quickworkstation.component';
import { QuickrackComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/quickrack.component';
import { QuickXCBTComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/quickXCBT.component';
import { ShellcounterComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/shellcounter.component';
import { SimplecounterComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/simplecounter.component';
import { WallComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/wall.component';
import { DisplaysComponent } from './productos-section/seccion-productos/displays/displays.component';
import { BannerbigComponent } from './productos-section/seccion-productos/displays/banners/banner-big.component';
import { BannereforzadoComponent } from './productos-section/seccion-productos/displays/banners/banner-reforzado.component';
import { BannermegaComponent } from './productos-section/seccion-productos/displays/banners/banner-mega.component';
import { BannerstodosComponent } from './productos-section/seccion-productos/displays/banners/banners-todos.component';
import { BannertanqueComponent } from './productos-section/seccion-productos/displays/banners/banner-tanque.component';
import { FlagsComponent } from './productos-section/seccion-productos/displays/flags/flags.component';
import { FlagBannerComponent } from './productos-section/seccion-productos/displays/flags/flag-banner.component';
import { FlagGloboComponent } from './productos-section/seccion-productos/displays/flags/flag-globo.component';
import { FlagTiburonComponent } from './productos-section/seccion-productos/displays/flags/flag-tiburon.component';
import { FlexoStandsComponent } from './productos-section/seccion-productos/displays/flexos/flexo-stands.component';
import { FlexoCurvoComponent } from './productos-section/seccion-productos/displays/flexos/flexo-curvo.component';
import { FlexoPanelTelaComponent } from './productos-section/seccion-productos/displays/flexos/flexo-tela.component';
import { FlexoVelcroComponent } from './productos-section/seccion-productos/displays/flexos/flexo-velcro.component';
import { FramePictureComponent } from './productos-section/seccion-productos/displays/frames/frame-picture.component';
import { FramesComponent } from './productos-section/seccion-productos/displays/frames/frames.component';
import { MochilaAVComponent } from './productos-section/seccion-productos/displays/mochilas/mochila-av.component';
import { MochilaFComponent } from './productos-section/seccion-productos/displays/mochilas/mochila-f.component';
import { MochilaHComponent } from './productos-section/seccion-productos/displays/mochilas/mochila-h.component';
import { MochilaPxComponent } from './productos-section/seccion-productos/displays/mochilas/mochila-px.component';
import { MochilasComponent } from './productos-section/seccion-productos/displays/mochilas/mochilas.component';
import { MochilasSComponent } from './productos-section/seccion-productos/displays/mochilas/mochila-s.component';
import { FrameTotemComponent } from './productos-section/seccion-productos/displays/frames/frame-totem.component';
import { RollUpComponent } from './productos-section/seccion-productos/displays/roll-up/roll-up.component';
import { Rollup2VistasComponent } from './productos-section/seccion-productos/displays/roll-up/roll-up-2vistas.component';
import { Rollup2VistasExtComponent } from './productos-section/seccion-productos/displays/roll-up/roll-up-2vistasext.component';
import { RollupEstandardComponent } from './productos-section/seccion-productos/displays/roll-up/roll-up-standard.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, FooterComponent, NgbdCarouselComponent, HomeComponent, HomeInfoContactoComponent,
    NavImagesSectionComponent, HomeNuestrosClientesComponent, HomeEmpresaComponent,
    SeccionProductosComponent, MenuPrincipalComponent,
    PmenusComponent, PortamenusComponent, BasicoComponent, PersonalizadosComponent, ExhibidoresLComponent, ExhibidoresMComponent,
    ModulosComponent, MicrocounterComponent, MinisimplecounterComponent, QuickcounterComponent, QuickdeskrComponent,
    QuickrackComponent, QuickshowcaseComponent, QuickworkstationComponent, QuickXCBTComponent, ShellcounterComponent,
    SimplecounterComponent, WallComponent,
    DisplaysComponent,
    BannerbigComponent, BannereforzadoComponent, BannermegaComponent, BannerstodosComponent, BannertanqueComponent,
    FlagsComponent, FlagBannerComponent, FlagGloboComponent, FlagTiburonComponent,
    FlexoStandsComponent, FlexoCurvoComponent, FlexoPanelTelaComponent, FlexoVelcroComponent,
    FramePictureComponent, FrameTotemComponent, FramesComponent,
    MochilaAVComponent, MochilaFComponent, MochilaHComponent, MochilaPxComponent, MochilasComponent, MochilasSComponent,
    RollUpComponent, Rollup2VistasComponent, Rollup2VistasExtComponent, RollupEstandardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDoQer4q7L50x8C4B8wMJA8dfI5od0vjNw'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
