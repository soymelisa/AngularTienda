import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

info:any = {};
cargada:boolean =false;
cargada_sobre_mi:boolean=false;
equipo:any[] = [];

  constructor( public http:Http ) {
    this.carga_info(),
    this.carga_sobre_mi();
  }

  public carga_info(){
    this.http.get("assets/data/info.pagina.json")
    .subscribe( data =>{
      //console.log(data.json());
      this.cargada =true;
      this.info = data.json();
      })
  }

  public carga_sobre_mi(){
    this.http.get("https://melisaproyecto.firebaseio.com/equipo.json")
    .subscribe( data =>{
      //console.log(data.json());
      this.cargada_sobre_mi =true;
      this.equipo = data.json();
      })
  }
}
