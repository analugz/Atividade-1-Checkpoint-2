import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  senha: string = "";
  mensagem: string = "";

  validarLogin() {
    if (!this.email || !this.senha) {
      this.mensagem = "Campos obrigatórios!";
    } else if (!this.email.includes("@") || this.senha.length < 6) {
      this.mensagem = "Credenciais inválidas!";
    } else if (this.email === "user@teste.com" && this.senha === "123456") {
      this.mensagem = "Login bem-sucedido!";
    } else {
      this.mensagem = "Credenciais inválidas!";
    }
  }
}
