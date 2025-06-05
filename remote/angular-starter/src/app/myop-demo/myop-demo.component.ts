import { Component } from '@angular/core';

@Component({
  selector: 'app-myop-demo',
  imports: [],
  templateUrl: './myop-demo.component.html',
  styleUrl: './myop-demo.component.css'
})
export class MyopDemoComponent {


  show() {
    alert('show');
  }

  go() {
    alert('go');
  }

}
