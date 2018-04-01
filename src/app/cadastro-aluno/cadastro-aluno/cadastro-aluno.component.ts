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
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {

    const codigoAluno = this.route.snapshot.params['codigo'];

    this.carregarSexos();

  }

  salvar(form: FormControl) {

    this.cadastroAlunoService.adicionar(this.aluno);
      form.reset();

    this.toasty.success('Aluno cadastrodo com sucesso!');

  }


  carregarSexos() {
    return this.sexoService.listarTodos()
      .then(listar => {
        this.sexos = listar
          .map(c => ({ label: c.descricao, value: c.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }



}
