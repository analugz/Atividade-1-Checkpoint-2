import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcessoComponent } from './components/Ex03/acesso.component';
import { ExibirMensagensComponent } from './components/Ex06/exibir-mensagens.component';
import { ListComprasComponent } from './components/Ex02/list-compras.component';
import { ListTarefaComponent } from './components/Ex05/list-tarefa.component';
import { ListaUsuariosComponent } from './components/Ex07/lista-usuarios.component';
import { MesComponent } from './components/Ex01/mes.component';
import { SwitchNumerosComponent } from './components/Ex08/switch-numeros.component';
import { LoginComponent } from './components/Ex09/login.component';
import { FormsModule } from '@angular/forms';
import { ListProdutosComponent } from './components/Ex10/list-produtos.component';
import { CalculadoraComponent } from './components/Ex11/calculadora.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    FormsModule ,
    CommonModule,
    MesComponent,
    ListComprasComponent,
    AcessoComponent,
    ListTarefaComponent,
    ExibirMensagensComponent,
    ListaUsuariosComponent,
    SwitchNumerosComponent,
    LoginComponent,
    ListProdutosComponent,
    CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atividade01';
}
