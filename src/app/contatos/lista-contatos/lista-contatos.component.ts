import { Component, OnInit } from '@angular/core';
import {ContatoService} from '../contato.service';
import {Contato} from '../contato.model';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.css']
})
export class ListaContatosComponent implements OnInit {
  contatos: Contato[];

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.contatos = this.contatoService.getContatos();
  }

}
