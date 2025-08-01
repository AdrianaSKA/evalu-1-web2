import { Component } from '@angular/core';
import { TareaService } from '../../service/tarea.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-tarea.component.html',
  styleUrl: './registro-tarea.component.css'
})
export class RegistroTareaComponent {

  constructor(private servicioTareas: TareaService) { }

  id?: string = '';
  titulo: string = '';
  descripcion: string = '';
  completada: boolean = false;
  fecha: string = '';

  guardarTarea(formulario: any){
    this.servicioTareas.postTareas(formulario.value).subscribe(()=> {
      window.location.reload();
    })

    

  }

}
