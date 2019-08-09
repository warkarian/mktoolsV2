import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SeccionProductosComponent } from './productos-section/seccion-productos/seccion-productos.component';
import { MenuPrincipalComponent } from './productos-section/seccion-productos/menu-principal/menu-principal.component';
import { BasicoComponent } from './productos-section/seccion-productos/portamenus/detalles-portamenus/pmbasico.component';
import { ExhibidoresMComponent } from './productos-section/seccion-productos/portamenus/detalles-portamenus/exhibidoresm.component';
import { ExhibidoresLComponent } from './productos-section/seccion-productos/portamenus/detalles-portamenus/exhibidoresl.component';
import { PersonalizadosComponent } from './productos-section/seccion-productos/portamenus/detalles-portamenus/personalizados.component';
import { PortamenusComponent } from './productos-section/seccion-productos/portamenus/portamenus.component';
import { ModulosComponent } from './productos-section/seccion-productos/modulos/modulos.component';
import { MicrocounterComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/microcounter.component';
import { MinisimplecounterComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/minisimplecounter.component';
import { QuickcounterComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/quickcounter.component';
import { QuickdeskrComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/quickdesk.component';
import { QuickrackComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/quickrack.component';
import { ShellcounterComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/shellcounter.component';
import { QuickshowcaseComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/quickshowcase.component';
import { SimplecounterComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/simplecounter.component';
import { QuickworkstationComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/quickworkstation.component';
import { QuickXCBTComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/quickXCBT.component';
import { WallComponent } from './productos-section/seccion-productos/modulos/detalles-modulos/wall.component';
import { DisplaysComponent } from './productos-section/seccion-productos/displays/displays.component';
import { BannerstodosComponent } from './productos-section/seccion-productos/displays/banners/banners-todos.component';
import { BannereforzadoComponent } from './productos-section/seccion-productos/displays/banners/banner-reforzado.component';
import { BannertanqueComponent } from './productos-section/seccion-productos/displays/banners/banner-tanque.component';
import { BannermegaComponent } from './productos-section/seccion-productos/displays/banners/banner-mega.component';
import { BannerbigComponent } from './productos-section/seccion-productos/displays/banners/banner-big.component';
import { RollUpComponent } from './productos-section/seccion-productos/displays/roll-up/roll-up.component';
import { RollupEstandardComponent } from './productos-section/seccion-productos/displays/roll-up/roll-up-standard.component';
import { Rollup2VistasComponent } from './productos-section/seccion-productos/displays/roll-up/roll-up-2vistas.component';
import { Rollup2VistasExtComponent } from './productos-section/seccion-productos/displays/roll-up/roll-up-2vistasext.component';
import { FlexoStandsComponent } from './productos-section/seccion-productos/displays/flexos/flexo-stands.component';
import { FlexoVelcroComponent } from './productos-section/seccion-productos/displays/flexos/flexo-velcro.component';
import { FlexoPanelTelaComponent } from './productos-section/seccion-productos/displays/flexos/flexo-tela.component';
import { FlexoCurvoComponent } from './productos-section/seccion-productos/displays/flexos/flexo-curvo.component';
import { FramesComponent } from './productos-section/seccion-productos/displays/frames/frames.component';
import { FrameTotemComponent } from './productos-section/seccion-productos/displays/frames/frame-totem.component';
import { FramePictureComponent } from './productos-section/seccion-productos/displays/frames/frame-picture.component';
import { FlagsComponent } from './productos-section/seccion-productos/displays/flags/flags.component';
import { FlagTiburonComponent } from './productos-section/seccion-productos/displays/flags/flag-tiburon.component';
import { FlagGloboComponent } from './productos-section/seccion-productos/displays/flags/flag-globo.component';
import { FlagBannerComponent } from './productos-section/seccion-productos/displays/flags/flag-banner.component';
import { MochilasComponent } from './productos-section/seccion-productos/displays/mochilas/mochilas.component';
import { MochilasSComponent } from './productos-section/seccion-productos/displays/mochilas/mochila-s.component';
import { MochilaHComponent } from './productos-section/seccion-productos/displays/mochilas/mochila-h.component';
import { MochilaFComponent } from './productos-section/seccion-productos/displays/mochilas/mochila-f.component';
import { MochilaPxComponent } from './productos-section/seccion-productos/displays/mochilas/mochila-px.component';
import { MochilaAVComponent } from './productos-section/seccion-productos/displays/mochilas/mochila-av.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'productos', component: SeccionProductosComponent, children: [
    {path: '', component: MenuPrincipalComponent , pathMatch: 'full'},
    {path: 'displays', component: DisplaysComponent},
    {path: 'portamenus', component: PortamenusComponent},
    {path: 'pmbasico', component: BasicoComponent},
    {path: 'exhibidoresm', component: ExhibidoresMComponent},
    {path: 'exhibidoresl', component: ExhibidoresLComponent},
    {path: 'personalizados', component: PersonalizadosComponent},
    {path: 'modulos', component: ModulosComponent},
    {path: 'microc', component: MicrocounterComponent},
    {path: 'minisimple', component: MinisimplecounterComponent},
    {path: 'quickc', component: QuickcounterComponent},
    {path: 'quickd', component: QuickdeskrComponent},
    {path: 'quickr', component: QuickrackComponent},
    {path: 'shellc', component: ShellcounterComponent},
    {path: 'quicks', component: QuickshowcaseComponent},
    {path: 'simplec', component: SimplecounterComponent},
    {path: 'quickw', component: QuickworkstationComponent},
    {path: 'quickx', component: QuickXCBTComponent},
    {path: 'wall', component: WallComponent},
    {path: 'banners', component: BannerstodosComponent},
    {path: 'bannerx', component: BannereforzadoComponent},
    {path: 'bannert', component: BannertanqueComponent},
    {path: 'bannerm', component: BannermegaComponent},
    {path: 'bannerb', component: BannerbigComponent},
    {path: 'roll-up', component: RollUpComponent},
    {path: 'roll-up-standard', component: RollupEstandardComponent},
    {path: 'roll-up-2vistas', component: Rollup2VistasComponent},
    {path: 'roll-up-2vistasext', component: Rollup2VistasExtComponent},
    {path: 'flexo-stands', component: FlexoStandsComponent},
    {path: 'flexo-velcro', component: FlexoVelcroComponent},
    {path: 'flexo-tela', component: FlexoPanelTelaComponent},
    {path: 'flexo-curvo', component: FlexoCurvoComponent},
    {path: 'frames', component: FramesComponent},
    {path: 'totem', component: FrameTotemComponent},
    {path: 'picture', component: FramePictureComponent},
    {path: 'flags', component: FlagsComponent},
    {path: 'flag-tiburon', component: FlagTiburonComponent},
    {path: 'flag-globo', component: FlagGloboComponent},
    {path: 'flag-banner', component: FlagBannerComponent},
    {path: 'mochila', component: MochilasComponent},
    {path: 'mochila-s', component: MochilasSComponent},
    {path: 'mochila-h', component: MochilaHComponent},
    {path: 'mochila-f', component: MochilaFComponent},
    {path: 'mochila-px', component: MochilaPxComponent},
    {path: 'mochila-av', component: MochilaAVComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
