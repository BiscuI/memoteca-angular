import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento : Pensamento = {
    conteudo : '',
    autoria : '',
    modelo : ''
  }

  constructor(private service :PensamentoService) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe()
  }

  cancelarPensamento(){
    alert("ELEE NÃO GOSSTA")
  }

}
