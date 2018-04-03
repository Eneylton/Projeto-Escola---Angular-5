import { PesquisaAlunoComponent } from './pesquisa-aluno/pesquisa-aluno/pesquisa-aluno.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno/cadastro-aluno.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  { path: 'alunos', component: PesquisaAlunoComponent },
  { path: 'alunos/:codigo', component: CadastroAlunoComponent },
  { path: 'alunos/novo', component: CadastroAlunoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
