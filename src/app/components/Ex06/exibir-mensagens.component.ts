import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exibir-mensagens',
  imports: [FormsModule, CommonModule],
  templateUrl: './exibir-mensagens.component.html',
  styleUrl: './exibir-mensagens.component.css'
})
export class ExibirMensagensComponent {

  status: string = '';

}
