import { Component } from '@angular/core';
import { HoverBorderDirective } from '../../directives/hover-border.directive';
import { EventoCardComponent } from '../evento-card/evento-card.component';
import { Evento } from '../../../interfaces';

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [HoverBorderDirective, EventoCardComponent],
  templateUrl: './programacao.component.html',
  styleUrl: './programacao.component.scss'
})
export class ProgramacaoComponent {
  eventos:Evento[] = [
    {
      id: 1,
      titulo: "Ida a Ironberg",
      horario: "10:00 AM",
      local: "Ironberg Gym",
      data: "29 de maio",
    },
    {
      id: 2,
      titulo: "Workshop de Tecnologia",
      horario: "12:00 PM",
      local: "Sala 202 - Centro de Convenções",
      data: "26 de maio"
    },
    {
      id: 3,
      titulo: "Palestra sobre Inteligência Artificial",
      horario: "2:30 PM",
      local: "Auditório 1 - Tech Arena",
      data: "30 de maio"
    },
    {
      id: 4,
      titulo: "Networking com Empreendedores",
      horario: "4:00 PM",
      local: "Espaço Co-Working",
      data: "28 de maio"
    }
  ];

}
