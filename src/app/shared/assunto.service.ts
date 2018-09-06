import { Assunto } from './assunto.model';

export class AssuntoService {
  private assuntos: Assunto[] = [
    new Assunto('Orçamento', 'pedido de orçamento de produtos'),
    new Assunto('Dúvida Técnica', 'como funciona nossos serviços'),
    new Assunto('Elogio', 'feedback de atendimentos'),
    new Assunto('Reclamação', 'defeito de produtos e serviços'),
    new Assunto('Cancelamento', 'de serviços e produtos')
  ];

  getListaAssuntos() {
    return this.assuntos.slice();
  }

  getAssunto(index: number) {
    return this.assuntos[index];
  }

}
