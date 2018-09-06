import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Contato } from './contato.model';
import {Assunto} from '../shared/assunto.model';

@Injectable()
export class ContatoService {
  private contatos: Contato[] = [
    new Contato('Edney', new Assunto('Entrega', 'entrega de produtos'), '3333-2222', 'Meu produto nao foi entregue.'),
    new Contato('Nadine', new Assunto('cobrança', 'problemas com pagamento'), '4444-5555', 'minha compre nao foi parcelada.'),
    new Contato('Marjorie', new Assunto('defeito', 'produto com defeito'), '1111-9999', 'Meu produto nao esta funcionando.')
  ];

  contatosAlteracao = new Subject<Contato[]>();

  getContatos() {
    return this.contatos.slice();
  }

  getContato(index: number) {
    return this.contatos[index];
  }

  adicionarContato(contato: Contato) {
    this.contatos.push(contato);
    this.contatosAlteracao.next(this.contatos.slice());
  }

}
