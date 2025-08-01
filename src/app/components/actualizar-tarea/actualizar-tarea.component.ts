import { Component } from '@angular/core';
import { TareaService } from '../../service/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-tarea.component.html',
  styleUrl: './actualizar-tarea.component.css'
})
export class ActualizarTareaComponent {

  constructor(private servicioTareas: TareaService,
    private router: Router, private ruta: ActivatedRoute
  ) { }

  id: string = '';
  tarea: any = {
    titulo: '',
    descripcion: '',
    completada: false,
    fecha: '',
  }

  ngOnInit():void{
    this.ruta.params.subscribe(params =>{
      this.id= params['id'];
      this.servicioTareas.getTareaById(this.id).subscribe(tarea => {
        this.tarea = tarea;
      });
    });
  }

  editarTarea(formulario: any):void{
    const tareaActualizado={...formulario.value, id: this.id};
    this.servicioTareas.putTarea(this.id, tareaActualizado).subscribe(()=> {
      this.router.navigate(['/tareas']);
    })
  }

}
