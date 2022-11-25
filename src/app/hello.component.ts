import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Testservice } from './services/test.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  public postsSubscription: Subscription;

  constructor(public test: Testservice) {}

  ngOnInit() {
    this.test.information.subscribe((res: Any) => {
      console.log('lllllllllllllll');
    });
  }
}
