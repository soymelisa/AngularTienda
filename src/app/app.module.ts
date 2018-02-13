import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/*Esto lo agregué después
import { AuthService } from "./services";
*/

import { HttpModule } from "@angular/http";

// Rutas

import { app_routing } from "./app.routes";

// Servicios
import { InformacionService } from "./services/informacion.service";
import { ProductosService } from "./services/productos.service";

// Componentes

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProdcutoItemsComponent } from './components/prodcuto-items/prodcuto-items.component';
import { SearchComponent } from './components/search/search.componen;
import { LoginComponent } from './components/login/login.component't';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ProdcutoItemsComponent,
    SearchCompone,
    LoginComponentnt
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [
    InformacionService,
    ProductosService,

    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
