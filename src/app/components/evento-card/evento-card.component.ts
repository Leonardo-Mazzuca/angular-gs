import { Component, Input } from '@angular/core';
import { HoverBorderDirective } from '../../directives/hover-border.directive';

@Component({
  selector: 'app-evento-card',
  standalone: true,
  imports: [HoverBorderDirective],
  templateUrl: './evento-card.component.html',
  styleUrls: ['./evento-card.component.scss']
})
export class EventoCardComponent {
  @Input() titulo: string = '';
  @Input() data: string = '';
  @Input() horario: string = '';
  @Input() local: string = '';
  @Input() indice: number = 0;

  mensagem = '';
  indiceItem = 0;

  agendarProgramacao (nomeEvento: string,index: number) {
    this.mensagem = `Você se inscreveu no evento ${nomeEvento}!`;
    this.indiceItem = index;
    setTimeout(()=> this.mensagem = "",2000);
  }
}
