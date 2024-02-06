import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http: HttpClient) { }

  fetchProjects():Observable<Project[]>{
    return this.http.get<Project[]>('http://localhost:3000/project')
  }

}
