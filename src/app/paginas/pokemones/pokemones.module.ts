import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
//Navegacion
import {RouterModule} from '@angular/router'
import { PokemonesPageRoutingModule } from './pokemones-routing.module';
//Hacer peticiones a internet
import {HttpClientModule} from '@angular/common/http'
import { PokemonesPage } from './pokemones.page';
import {InfoPokemonComponent} from './componentes/info-pokemon/info-pokemon.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonesPageRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [PokemonesPage, InfoPokemonComponent]
})
export class PokemonesPageModule {}
