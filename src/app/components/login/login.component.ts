import {Component} from "@angular/core";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html"
})
export class LoginComponent {
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