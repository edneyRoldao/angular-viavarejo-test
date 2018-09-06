import {Assunto} from '../shared/assunto.model';

export class Contato {

  constructor(public nome: string,
              public assunto: Assunto,
              public telefone: string,
              public mensagem: string) {}

}
