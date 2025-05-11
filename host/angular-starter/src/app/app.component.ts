import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TranslocoRootModule} from './transloco-root.module';
import {MyopContainerComponent} from '@myop/angular';

//import {UserProfileCardComponent} from './userCard/user-profile-card.component'

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, TranslocoRootModule, UserProfileCardComponent],
  imports: [RouterOutlet, TranslocoRootModule, MyopContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Starter!';
  show = false;

  someObject = {
    key1: '123',
    key2: '456',
    someInputValue: 'testValue',
    fun1: () => {
      alert('ffff')
    }
  }

  showComponent = () => {
alert('yes')
    this.show = true;
  }
}
