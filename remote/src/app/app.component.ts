import {Component, Input, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TranslocoRootModule} from './transloco-root.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslocoRootModule],
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @Input() someInputValue = ''; // decorate the property with @Input()
  @Input() fun1 = ()=>{
    alert('not set')
  }

  title = 'Angular Starter!';
}
