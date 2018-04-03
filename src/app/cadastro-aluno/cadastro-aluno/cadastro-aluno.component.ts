import { CadastroAlunoService } from './../cadastro-aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../core/model';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { SexoService } from '../sexo.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {


  aluno = new Aluno();

   sexos = [];

  constructor(
    private cadastroAlunoService : CadastroAlunoService,
    private sexoService : SexoService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private title: Title,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {

    const codigoAluno = this.route.snapshot.params['codigo'];

    if (codigoAluno) {
      this.carregarAluno(codigoAluno);
      this.carregarSexos();

    }

  }

  get editando() {
    return Boolean(this.aluno.id)
  }

  carregarAluno(codigo: number) {
    this.cadastroAlunoService.buscarPorCodigo(codigo)
      .then(aluno => {
        this.aluno = aluno;
      });
  }

  salvar(form: FormControl) {

    if (this.editando) {
      this.cadastroAlunoService.atualizar(this.aluno);
      form.reset();
      this.toasty.success('Aluno atualizado com sucesso!');
    } else {

      this.cadastroAlunoService.adicionar(this.aluno);
      form.reset();

      this.toasty.success('Aluno cadastrado com sucesso!');

    }

  }


  carregarSexos() {
    return this.sexoService.listarTodos()
      .then(listar => {
        this.sexos = listar
          .map(c => ({ label: c.descricao, value: c.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de lançamento: ${this.aluno.nome}`);
  }

}
