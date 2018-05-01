import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class ProductosService {
//ProductosService es para mí el AuthService
  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargando_p:boolean =false; //que me mantenga algo así como un loading
  /*aparte ya en clase*/
  public token: string;

  constructor( private http:Http ) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token =currentUser && currentUser.token;
  }
  login( user:string, password: string ):Observable<boolean>{
    return this.http.post('http://50.116.28.21:8000/api-token-auth/'), { username: user, password: password }
    .map(response => {
      let token = response['token'];
      if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ username: user, token:token }));
          return true;
      }
      return false;
    })
  }

logout():void{
  this.token = null;

}

/*
  constructor( private http:Http ) {
    this.cargar_productos();
  }
*/
  public buscar_producto( termino:string ){

    console.log("Buscando producto");
    console.log( this.productos.length );

    if (this.productos.length === 0) {
        this.cargar_productos().then(()=> {
          //ya entonces sé que terminó la carga
            this.filtrar_productos(termino);
        });
    }else{
      this.filtrar_productos(termino);
    }
  }

  private filtrar_productos(termino:string){
    this.productos_filtrado = [];
    termino = termino.toLowerCase();

    this.productos.forEach( prod =>{
      if(prod.categoria.indexOf( termino ) >=0 || prod.titulo.toLowerCase().indexOf( termino )>=0 ){
        this.productos_filtrado.push( prod );
        console.log( prod );
      }
      //console.log( prod );
    })
  }


  public cargar_producto( cod:string ){
    return this.http.get(`https://melisaproyecto.firebaseio.com/productos/${ cod }.json`);
  }

  public cargar_productos(){

    this.cargando_p = true;

    let promesa = new Promise( ( resolve, reject )=> {
      this.http.get('https://melisaproyecto.firebaseio.com/productos_idx.json')
      .subscribe( res => {
        //console.log( res.json() );

        setTimeout( ()=> {
          this.cargando_p = false;
          this.productos = res.json();
          resolve();

        },1800)

      });
    });
    return promesa;
  }

}
