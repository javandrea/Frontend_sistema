import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  public usuario: string = ''; 
  public contraseña: string = '';

  public login() {
    if(this.usuario == "") {
      alert("el usuario es obligatorio")
  }   else if(this.contraseña == "") {
      alert("la contraseña es obligatoria")
  } else {
    const body = {
      usuario: this.usuario,
      contraseña: this.contraseña
    };
    console.log(body);
  }
  }
}