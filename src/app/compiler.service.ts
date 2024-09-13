import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { CompileResponse } from './compiled-code-response';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {
  private compileResponse?: CompileResponse;
  private errorMessage = "";

  constructor(private httpClient: HttpClient) { }

  getCompiledCode(najaCode: string, lang: string): void {
    const endpoint = 'http://localhost:8080/compile';
    const payload = { code: najaCode, lang };
    this.httpClient.post<CompileResponse>(endpoint, payload).subscribe({
      next: resData => {
        this.compileResponse = resData;
      },
      error: (err: HttpErrorResponse) => {
        if (err.error?.errors)
          this.errorMessage = err.error.message;
        else
          this.errorMessage = err.error.toString();
      },
    });
  }

  getCompileResponse() {
    return this.compileResponse;
  }

  getError() {
    return this.errorMessage;
  }
}
