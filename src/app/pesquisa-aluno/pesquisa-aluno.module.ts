import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaAlunoComponent } from './pesquisa-aluno/pesquisa-aluno.component';
import { ToolbarModule } from 'primeng/components/toolbar/toolbar';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    DataTableModule,
    RouterModule
  ],
  declarations: [PesquisaAlunoComponent],
  exports:[PesquisaAlunoComponent]
})
export class PesquisaAlunoModule { }
