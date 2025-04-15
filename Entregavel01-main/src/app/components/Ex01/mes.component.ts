import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { hrtime } from 'process';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-mes',
  imports: [CommonModule, FormsModule],
  templateUrl: './mes.component.html',
  styleUrl: './mes.component.css'
})
export class MesComponent {

  mes: number = 0;

}
