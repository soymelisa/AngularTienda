// ng2routes -->
import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  PortafolioComponent,
  ProdcutoItemsComponent
} from "./components/index.paginas";

const app_routes: Routes = [
  { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
      { path: 'producto', component: ProdcutoItemsComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true } );
