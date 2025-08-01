import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) { }

  private API_TAREAS = 'https://evalu-p1-default-rtdb.firebaseio.com/'

  postTareas(tarea: any):Observable<any>{
    return this.http.post(`${this.API_TAREAS}/tareas.json`, tarea)
  }

    getTareas(): Observable<any>{
    return this.http.get(this.API_TAREAS)
  }

  getTareaById(id: string):Observable<any>{
    return this.http.get(`${this.API_TAREAS}/tareas/${id}.json`);
  }

  deleteTarea(id: string):Observable<any>{
    return this.http.delete(`${this.API_TAREAS}/tareas/${id}.json`);
  }

  putTarea(id: string, tarea: any): Observable<any>{
    return this.http.put(`${this.API_TAREAS}/tareas/${id}.json`, tarea);
  }

}
