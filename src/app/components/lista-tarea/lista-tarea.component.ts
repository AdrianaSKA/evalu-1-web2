import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TareaService } from '../../service/tarea.service';

@Component({
  selector: 'app-lista-tarea',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-tarea.component.html',
  styleUrl: './lista-tarea.component.css'
})
export class ListaTareaComponent implements OnInit{

  tareas: any[] = [];

  constructor(private servicioTareas: TareaService) { }

  ngOnInit(): void {
    this.servicioTareas.getTareas().subscribe(data => {
      this.tareas = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
    });
  }

  eliminarTarea(id: string): void {
    console.log('eliminado', id);
    this.servicioTareas.deleteTarea(id).subscribe(() => {
      this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    }, error => {
      console.log('No se puede eliminar la tarea', error);
    });
  }
}
