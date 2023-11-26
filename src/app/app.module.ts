  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule } from '@angular/forms';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { AlmacenComponent } from './almacen/almacen.component';
  import { ObreroComponent } from './obrero/obrero.component';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';

  @NgModule({
    declarations: [
      AppComponent,
      AlmacenComponent,
      ObreroComponent,
      RickAndMortyComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
