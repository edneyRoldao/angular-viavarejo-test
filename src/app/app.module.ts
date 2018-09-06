import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ListaContatosComponent } from './contatos/lista-contatos/lista-contatos.component';
import { EditarContatoComponent } from './contatos/editar-contato/editar-contato.component';
import { NovoContatoComponent } from './contatos/novo-contato/novo-contato.component';
import { ItemContatoComponent } from './contatos/lista-contatos/item-contato/item-contato.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MascaraTelefoneDirective } from './shared/directives/mascara-telefone.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContatosComponent,
    ListaContatosComponent,
    EditarContatoComponent,
    NovoContatoComponent,
    ItemContatoComponent,
    HomeComponent,
    MascaraTelefoneDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
