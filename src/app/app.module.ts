import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDemoComponent } from './components/product-demo/product-demo.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }