import { Component, OnInit } from '@angular/core';
import { ListaFuncionariosService } from './services/lista-funcionarios.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  funcionarios: any[] = [];

  constructor(private listaFuncionariosService: ListaFuncionariosService) { }

  ngOnInit(): void {
      this.getFuncionarios();
  }

  getFuncionarios(): void {
      this.listaFuncionariosService.getFuncionarios().subscribe(f => this.funcionarios = f);
  }
}
