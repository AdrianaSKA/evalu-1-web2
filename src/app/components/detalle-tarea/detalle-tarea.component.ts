import { Component } from '@angular/core';
import { TareaService } from '../../service/tarea.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-tarea',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle-tarea.component.html',
  styleUrl: './detalle-tarea.component.css'
})
export class DetalleTareaComponent {

    constructor(private servicioTareas: TareaService) { }

    tareas: any[] = [];

  ngOnInit() {
    this.servicioTareas.getTareas().subscribe(data => {
      this.tareas = Object.keys(data).map(key =>({
        id: key, 
        ...data[key]
      }));
    })
  }

}
