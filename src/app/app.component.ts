import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { ProgramacaoComponent } from './components/programacao/programacao.component';
import { InspiracaoComponent } from './components/inspiracao/inspiracao.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    ParceirosComponent,
    GiftsComponent,
    ProgramacaoComponent,
    InspiracaoComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
}
