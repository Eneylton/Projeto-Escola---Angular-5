import { TestBed, inject } from '@angular/core/testing';

import { CadastroAlunoService } from './cadastro-aluno.service';

describe('CadastroAlunoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastroAlunoService]
    });
  });

  it('should be created', inject([CadastroAlunoService], (service: CadastroAlunoService) => {
    expect(service).toBeTruthy();
  }));
});
