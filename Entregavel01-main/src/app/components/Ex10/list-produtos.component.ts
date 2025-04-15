import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css']
})
export class ListProdutosComponent {
  listaProdutos = [
    { nome: "Notebook", preco: 3000, promocao: true },
    { nome: "Mouse", preco: 50, promocao: false }
  ];

  trackByNome(index: number, produto: any): string {
    return produto.nome;
  }
}
