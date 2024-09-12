import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-compile-btn',
  templateUrl: './compile-btn.component.html',
  styleUrls: ['./compile-btn.component.css']
})
export class CompileBtnComponent {
  @Input({ required: true }) lang!: string;
  @Output() action = new EventEmitter<string>();

  onClick() {
    this.action.emit(this.lang);
  }

  getBtnText(): string {
    if (this.lang == "") return "";
    return this.lang.charAt(0).toUpperCase() + this.lang.slice(1);
  }
}
