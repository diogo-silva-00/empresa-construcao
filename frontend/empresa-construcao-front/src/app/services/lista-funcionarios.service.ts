import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHandler } from '@angular/common/http';
import { Funcionario } from '../interfaces/funcionarios';

@Injectable({
  providedIn: 'root'
})
export class ListaFuncionariosService {
  private apiUrl = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  getFuncionarios(): Observable<any> {
      return this.http.get(`${this.apiUrl}/funcionarios`);
  }

  getFuncionario(id: number): Observable<any> {
      return this.http.get(`${this.apiUrl}/funcionarios/${id}`);
  }
}
