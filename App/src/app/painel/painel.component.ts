import { Component, EventEmitter, Output } from '@angular/core';
import { TentativasComponent } from '../tentativas/tentativas.component';
import { ProgressoComponent } from '../progresso/progresso.component';

import { Frase } from '../shared/frase.model';
import { frases } from './frases-mock'

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [TentativasComponent, ProgressoComponent],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent {

  public instrucao: string = 'Traduza a frase:';
  public frases: Frase[] = frases;
  public resposta: string = '';
  public rodada:number = 0;
  public rodadaFrase: Frase = frases[3];
  public progresso: number = 0;
  public tentativas: number = 3;
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor(){
    this.atualizaRodada();
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta():void{
    

    if(this.rodadaFrase.frasePtbr == this.resposta){


      //Progresso porcentagem
      this.progresso = this.progresso + (100/(this.frases).length)

      this.rodada++;

      if(this.rodada === this.frases.length){
        this.encerrarJogo.emit("vitória");
      } 
      else{
        this.atualizaRodada();
      }

    }
    else{
      alert('Tradução errada');
      this.tentativas--;
      if(this.tentativas === -1 ){
        this.encerrarJogo.emit("derrota");
      }


    }

  }

  public atualizaRodada():void{
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';

  }



}
