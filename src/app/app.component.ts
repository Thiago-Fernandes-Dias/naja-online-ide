import { Component, inject, ViewChild } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import { CompilerService } from './compiler.service';
import { CompileResponse } from './compiled-code-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public code: string = '';

  private compilerService: CompilerService = inject(CompilerService);

  public editorOptions = {
    lineNumbers: true,
    mode: 'naja'
  }

  resultOptions() {
    const result = this.compilerService.getCompileResponse();
    return {
      lineNumbers: false,
      mode: result ? result.lang : "markdown",
      readOnly: true,
      theme: "material-light"
    };
  }

  compile(lang: string): void {
    this.compilerService.getCompiledCode(this.code, lang);
  }

  get compiledCode(): string {
    const response = this.compilerService.getCompileResponse();
    return response ? response.code : "";
  }

  get compilationError(): string {
    const result = this.compilerService.getError();
    return result ? result : "";
  }
}
