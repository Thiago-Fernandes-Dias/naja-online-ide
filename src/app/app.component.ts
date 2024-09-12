import { Component, inject, ViewChild } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import { CompilerService } from './compiler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public code: string = '';

  @ViewChild(CodemirrorComponent, { static: false })
  private cmComponent!: CodemirrorComponent;

  private compilerService: CompilerService = inject(CompilerService);

  ngAfterViewInit(): void {
    this.cmComponent.codeMirrorGlobal.defineSimpleMode("naja",
      {
        start: [
          { regex: /programa|declare|inicio|fim|fimprog|leia|escreva|se|entao|senao|fimse|enquanto|faça|fimfaça/, token: "keyword" },
          { regex: /number|text/, token: "atom" },
          { regex: /[a-zA-Z_]\w*/, token: "variable" },
          { regex: /[0-9]+/, token: "number" },
          { regex: /"([^\\"]|\\.)*"/, token: "string" },
          { regex: /:=|<=|>=|==|!=|<|>|[+\-*/]/, token: "operator" },
          { regex: /,|;|\(|\)/, token: "punctuation" },
          { regex: /\/\*/, token: "comment", next: "comment" },
          { regex: /\/\/.*/, token: "comment" }
        ],
        comment: [
          { regex: /.*?\*\//, token: "comment", next: "start" },
          { regex: /.*/, token: "comment" }
        ],
        meta: {
          lineComment: "//"
        }
      }
    );
    this.cmComponent.codeMirrorGlobal.setOption("mode", "naja");
  }

  compile(lang: string): void {
    this.compilerService.getCompiledCode(this.code, lang);
  }

  getCompiledCode(): string {
    const result = this.compilerService.getCompilationResult();
    if (typeof result === 'string') {
      return result;
    }
    return "";
  }

  getError(): string {
    const result = this.compilerService.getCompilationResult();
    if (result instanceof Error) {
      return result.message;
    }
    return "";
  }
}
