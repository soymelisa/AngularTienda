import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-prodcuto-items',
  templateUrl: './prodcuto-items.component.html',
  styles: []
})
export class ProdcutoItemsComponent {

  constructor( private route:ActivatedRoute ) {
    route.params.subscribe( parametros=>{
      console.log( parametros );
      console.log( parametros['id'] );  
    })
    //para obtener el parámetro
   }

}
