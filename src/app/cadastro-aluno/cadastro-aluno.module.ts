import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/components/toolbar/toolbar';
import { ButtonModule } from 'primeng/components//button/button';
import { CardModule } from 'primeng/components/card/card';
import { InputTextModule } from 'primeng/components//inputtext/inputtext';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';


@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    RouterModule,
    FormsModule
  ],
  declarations: [CadastroAlunoComponent],
  exports: [CadastroAlunoComponent]
})
export class CadastroAlunoModule { }
