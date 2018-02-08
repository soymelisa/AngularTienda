import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando_p:boolean =false; //que me mantenga algo así como un loading

  constructor( private http:Http ) {
    this.cargar_productos();
  }

  public cargar_productos(){

    this.cargando_p = true;

    if (this.productos.length === 0) {
      this.http.get('https://melisaproyecto.firebaseio.com/productos_idx.json')
      .subscribe( res => {
        console.log( res.json() );
        this.cargando_p = false;
      })
    }
  }

}
