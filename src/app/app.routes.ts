import { Routes } from '@angular/router';
import { RegistroTareaComponent } from './components/registro-tarea/registro-tarea.component';
import { ListaTareaComponent } from './components/lista-tarea/lista-tarea.component';
import { ActualizarTareaComponent } from './components/actualizar-tarea/actualizar-tarea.component';

export const routes: Routes = [

    { path: '', redirectTo: '/tareas', pathMatch: 'full' },
    { path: 'tareas', component: ListaTareaComponent },
    { path: 'agregar-tarea', component: RegistroTareaComponent },
    { path: 'actualizar-tarea/:id', component: ActualizarTareaComponent }



];
