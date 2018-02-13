import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public model: any = {};
public loading: boolean = false; //desactiva los usuarios si el usuario esta clickeando y  no spamee el botón de login, por ejemplo
public error: string;
/*Es recomendable solo mostrarle al usuario un solo error de momento, nunca mostrar lo
que estas obteniendo a través del servicio. Si le das el hint, puede irse solamente a la contraseña*/

  constructor(
    private AuthService: AuthService,
    private router: Router
  ) { }

  ngOnInit():void {
    this.AuthService.logout();
  }
  login():void{
    this.loading = true;
    this.AuthService.login(this.model.user, this.model.password)
    .subscribe(result => {
      if (result) {
          this.router.navigateByUrl(['/']);
          //navigateByURL es más seguro usando redirects,
      } else{
      this.error = 'User/password error';
      this.loading = false;
    }

    })
  }
}
