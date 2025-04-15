import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-tarefa',
  imports: [FormsModule, CommonModule],
  templateUrl: './list-tarefa.component.html',
  styleUrl: './list-tarefa.component.css'
})
export class ListTarefaComponent {

  listaTarefas: string [] = ["Estudar Angular", "Fazer exercícios", "Revisar código"];

  removerTarefa(index: number){
    this.listaTarefas.splice(index,1);
  }
}
