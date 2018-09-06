import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  menu: [{nome: string, link: string}] = [
    {nome: 'Home', link: '/home'},
    {nome: 'Novo Contato', link: '/contatos/novo'},
    {nome: 'Lista Contatos', link: '/contatos'}
  ];

}
