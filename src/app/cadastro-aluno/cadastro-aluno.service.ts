import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Aluno } from '../core/model';

@Injectable()
export class CadastroAlunoService {

  alunoUrl = 'http://localhost:8080/alunos';

  constructor(private http: Http) { }

  adicionar(aluno: Aluno): Promise<Aluno> {
    const headers = new Headers();
          headers.append('Content-Type', 'application/json');

    return this.http.post(this.alunoUrl,
      JSON.stringify(aluno), { headers })
      .toPromise()
      .then(response => response.json());
  }

}
