import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoRootModule } from './transloco-root.module';
import { MyopContainerComponent } from '@myop/angular';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TranslocoRootModule, MyopContainerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Starter!';

  someObject = {
    key1: '123',
    key2: '456',
    someInputValue : 'testValue',
    fun1 : ()=>{
      alert('ffff')
    }
  }
}
