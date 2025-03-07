import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  onClick(op: string) {
    switch (op) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num1 / this.num2;
        break;
      case 'media':
        this.result = this.num1 + this.num2 / 2;
        break;
      case 'potencia':
        this.result = this.num1 ** this.num2;
        break;
    }
  }
}
