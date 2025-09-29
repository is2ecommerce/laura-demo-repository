import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.interface';
import { MOCK_PRODUCTS } from '../../data/mock-products';

@Component({
  selector: 'app-product-demo',
  templateUrl: './product-demo.component.html',
  styleUrls: ['./product-demo.component.scss']
})
export class ProductDemoComponent implements OnInit {
  products: Product[] = MOCK_PRODUCTS;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product, 1);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  }

  hasDiscount(product: Product): boolean {
    return !!(product.originalPrice && product.originalPrice > product.price);
  }

  getDiscountPercentage(product: Product): number {
    if (!this.hasDiscount(product)) return 0;
    
    const discount = ((product.originalPrice! - product.price) / product.originalPrice!) * 100;
    return Math.round(discount);
  }
}