import { Component, OnInit } from '@angular/core';
import {ContatoService} from './contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
  providers: [ContatoService]
})
export class ContatosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
