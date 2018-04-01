import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno/cadastro-aluno.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

  { path: 'alunos/novo', component: CadastroAlunoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
