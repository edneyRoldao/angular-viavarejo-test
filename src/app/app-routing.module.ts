import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ContatosComponent} from './contatos/contatos.component';
import {ListaContatosComponent} from './contatos/lista-contatos/lista-contatos.component';
import {EditarContatoComponent} from './contatos/editar-contato/editar-contato.component';
import {NovoContatoComponent} from './contatos/novo-contato/novo-contato.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contatos', component: ContatosComponent, children: [
      {path: '', component: ListaContatosComponent},
      {path: 'listar', component: ListaContatosComponent},
      {path: ':id/editar', component: EditarContatoComponent},
      {path: 'novo', component: NovoContatoComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
