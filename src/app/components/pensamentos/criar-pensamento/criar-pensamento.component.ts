import { Pensamento } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento : Pensamento = {
    id : 1,
    conteudo : 'No que você está pensando?',
    autoria : 'Quem criou tal pensamento?',
    modelo : ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("UEPA CAVALO ELE GOXTA")
  }

  cancelarPensamento(){
    alert("ELEE NÃO GOSSTA")
  }

}
