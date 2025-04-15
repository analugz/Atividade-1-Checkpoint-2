import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-usuarios',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {

  listaUsuarios = [{ nome: "Ana", idade: 25 }, { nome: "Carlos", idade: 30 }];

}
