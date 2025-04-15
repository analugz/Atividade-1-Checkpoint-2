import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-compras',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-compras.component.html',
  styleUrl: './list-compras.component.css'
})
export class ListComprasComponent {

  listaCompras: string [] = ["Maça", "Banana", "Leite"];

}
