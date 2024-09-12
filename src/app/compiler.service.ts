import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { CompileResponse } from './compiled-code-response';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {
  private compilationResult?: CompileResponse | Error;

  constructor(private httpClient: HttpClient) { }

  getCompiledCode(najaCode: string, lang: string): void {
    console.log("Pass here");
    const endpoint = 'http://localhost:8080/compile';
    const payload = new FormData();
    const blob = new Blob([najaCode], { type: '.txt' })
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    payload.append('file', blob);
    this.httpClient.post<CompileResponse>(endpoint, payload, { headers }).subscribe({
      next: resData => {
        this.compilationResult = resData;
        console.log(resData);
      },
      error: err => {
        this.compilationResult = new Error(err.toString());
        console.log(err.toString());
      },
    });
  }

  getCompilationResult() {
    return this.compilationResult;
  }
}
