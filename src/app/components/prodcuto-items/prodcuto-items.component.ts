import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-prodcuto-items',
  templateUrl: './prodcuto-items.component.html',
  styles: []
})
export class ProdcutoItemsComponent {
  producto:any = undefined;
  cod:string =undefined;

  constructor( private route:ActivatedRoute,
                private _ps: ProductosService ) {
    route.params.subscribe( parametros=>{
      //console.log( parametros );
      //console.log( parametros['id'] );
      _ps.cargar_producto( parametros['id'] )
      .subscribe( res=> {

        this.cod = parametros['id'];
        //console.log( res.json());
        this.producto = res.json(); //para que no tengamos que llamar la función 2 veces
        console.log( this.producto ); //de lo contrario solo consume memoria 2 veces

      });
    })
    //para obtener el parámetro
   }

}
