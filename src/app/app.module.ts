import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { CompileBtnComponent } from './compile-btn/compile-btn.component';
import { provideHttpClient } from '@angular/common/http';
import { CodeContainerComponent } from './code-container/code-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CompileBtnComponent,
    CodeContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CodemirrorModule,
  ],
  bootstrap: [AppComponent],
  providers: [provideHttpClient()],
})
export class AppModule { }
