import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    name = 'John Doe';
    age = 20;
    email = 'john.doe@example.com';
    phone = '123-456-7890';
    address = '123 Main St, Anytown, USA';
    city = 'Anytown';
    state = 'CA';
    zip = '12345';
    imageUrl = 'https://placehold.co/600x400';
    clickCount = 0;
    clickCount2 = 0;

    increaseCount() {
      this.clickCount++;
  }

  increaseCount2() {
    this.clickCount2++;
  }
}



