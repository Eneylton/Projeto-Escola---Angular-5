import { PesquisaAlunoService } from './../pesquisa-aluno.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-pesquisa-aluno',
  templateUrl: './pesquisa-aluno.component.html',
  styleUrls: ['./pesquisa-aluno.component.css']
})
export class PesquisaAlunoComponent implements OnInit {


  @Input()  alunos = [];
  @ViewChild('tabela') grid;

  constructor(
    private pesquisaService: PesquisaAlunoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService

  ) { }

  ngOnInit() {

    this.pesquisar();
  }

  pesquisar() {
    this.pesquisaService.pesquisar()
      .then(alunos => this.alunos = alunos).catch(erro => this.errorHandler.handle(erro));
  }


  confirmarExclusao(aluno: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(aluno);
      }
    });
  }



  excluir(codigo: number) {
    this.pesquisaService.remover(codigo)
      .then(() => {
        if (this.grid.first === 0){
          this.pesquisar();
        }else{

          this.grid.first = 0;
        }

        this.toasty.success('Aluno excluído com sucesso!');
      });
  }
}
