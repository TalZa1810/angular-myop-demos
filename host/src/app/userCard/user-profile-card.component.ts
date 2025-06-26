import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class UserProfileCardComponent {
  @Input() userName = 'John Doe';
  @Input() email = 'john.doe@example.com';

  sayHello() {
    alert(`Hello from ${this.userName}`);
  }
}

