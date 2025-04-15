import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-numeros',
  imports: [FormsModule, CommonModule],
  templateUrl: './switch-numeros.component.html',
  styleUrl: './switch-numeros.component.css'
})
export class SwitchNumerosComponent {


  valor: number = 0;
  resposta: string = '';

}
