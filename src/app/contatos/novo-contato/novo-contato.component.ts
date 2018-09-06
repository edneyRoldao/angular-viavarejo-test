import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Contato } from '../contato.model';
import { Assunto } from '../../shared/assunto.model';
import { AssuntoService } from '../../shared/assunto.service';
import { ContatoService } from '../contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.css']
})
export class NovoContatoComponent implements OnInit {
  descricaoAssunto: string;
  assuntos: Assunto[];

  constructor(private assuntoService: AssuntoService,
              private contatoService: ContatoService,
              private router: Router) { }

  ngOnInit() {
    this.assuntos = this.assuntoService.getListaAssuntos();
  }

  onChange(value) {
    this.descricaoAssunto = value.descricao;
  }

  adicionarContato(dadosForm: NgForm) {
    const item = dadosForm.value;
    const nContato = new Contato(item.nome, item.assunto, item.telefone, item.mensagem);
    this.contatoService.adicionarContato(nContato);
    this.router.navigate(['contatos']);
  }


}
