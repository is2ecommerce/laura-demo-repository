import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-Commerce Cart Demo';
  showCart = true;

  toggleView(): void {
    this.showCart = !this.showCart;
  }
}