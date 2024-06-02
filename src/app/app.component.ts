import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DecomisanCargamentoComponent } from './nacional/decomisan-cargamento/decomisan-cargamento.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DecomisanCargamentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tsts';
}
