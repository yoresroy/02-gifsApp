import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { BusquedaComponent } from '../../gifs/busqueda/busqueda.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService : GifsService) { }

  get historial(){
    return this.gifsService.historial;
  }

  buscar(buscar:string){
    this.gifsService.buscarGifs(buscar);
  }

}
