import { Component } from '@angular/core';
import {AssuntoService} from './shared/assunto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AssuntoService]
})
export class AppComponent {
  title = 'app';
}
