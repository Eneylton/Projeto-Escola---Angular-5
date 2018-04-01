import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SexoService {

  sexosUrl = 'http://localhost:8080/sexos';

  constructor(private http: Http) {}

  listarTodos(): Promise<any> {
    const headers = new Headers();

    return this.http.get(this.sexosUrl, { headers })
      .toPromise()
      .then(response => response.json());
  }


}
