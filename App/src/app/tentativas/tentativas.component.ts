import { Component } from '@angular/core';
import { Coracao } from '../shared/coracao.model';
import { NgFor } from '@angular/common';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';


@Component({
  selector: 'app-tentativas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tentativas.component.html',
  styleUrl: './tentativas.component.css'
})
export class TentativasComponent implements OnChanges {


  @Input() public tentativas:number = 0;


  

  public arrayCoracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  public ngOnChanges(){
      
    if(this.tentativas >= 0 && this.tentativas!=this.arrayCoracoes.length ){
      this.arrayCoracoes[this.tentativas].cheio = false;
    }

  }

}
