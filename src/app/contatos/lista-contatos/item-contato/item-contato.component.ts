import {Component, Input, OnInit} from '@angular/core';
import {Contato} from '../../contato.model';

@Component({
  selector: 'app-item-contato',
  templateUrl: './item-contato.component.html',
  styleUrls: ['./item-contato.component.css']
})
export class ItemContatoComponent implements OnInit {

  constructor() { }

  @Input()
  contato: Contato;

  @Input()
  index: number;

  ngOnInit() {
  }

}
