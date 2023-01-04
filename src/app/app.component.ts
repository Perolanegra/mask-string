import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  inputTest = '';

  maskString(value: string, pattern: string): string {
    if (!value || !pattern) return '--';
    let i = 0;
    const v = value.toString();
    return pattern.replace(/#/g, (_) => v[i++]).replace(/undefined/g, '');
  }

  onKeyUp(event) {
    const masked = this.maskString(event.target.value, '###.###.###-##');
    if (event.target.value.length === 11) {
      this.inputTest = masked;
    }
  }
}
