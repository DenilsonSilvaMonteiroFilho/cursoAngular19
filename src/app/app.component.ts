import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cursoAngular19';
}
