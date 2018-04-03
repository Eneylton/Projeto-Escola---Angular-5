import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PesquisaAlunoService {

  alunosUrl = 'http://localhost:8080/alunos';

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {

    return this.http.get(`${this.alunosUrl}`)
      .toPromise()
      .then(response => response.json())
  }

  remover(codigo:number): Promise<void> {

    return this.http.delete(`${this.alunosUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

}
