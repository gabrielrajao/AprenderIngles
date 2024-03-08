import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopoComponent, PainelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public jogoEmAndamento:boolean = true;
  public tipoEncerramento: string = '';

  public encerrarJogo(tipo: string): void{
    this.tipoEncerramento = tipo;
    this.jogoEmAndamento = false;
  }

  public reiniciarJogo():void{
    this.jogoEmAndamento = true;
    this.tipoEncerramento = '';
  }

}
